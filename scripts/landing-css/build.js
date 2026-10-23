/**
 * Builds the stylesheets of the city landing pages.
 *
 * The pages come from Lovable projects styled with Tailwind v4, which the CRA 4
 * toolchain cannot compile. This runs the Tailwind CLI over each design's
 * source CSS, then post-processes the result into plain CSS that is safe to
 * load into the rest of the site:
 *
 *  - Every selector is scoped under the page's wrapper class, so Tailwind's
 *    reset and utilities cannot leak into other pages once the chunk loads.
 *    :root, :host and body map to the wrapper itself.
 *  - Cascade layers are flattened. The site's own CSS is unlayered, and
 *    unlayered rules beat layered ones regardless of specificity, so leaving
 *    the layers in would let App.css win over every Tailwind utility. Layers
 *    are emitted in their declared order with unlayered rules last, which
 *    keeps their original precedence.
 *  - oklch() colours are converted to sRGB for older browsers.
 *  - App.css rules that hit every element are undone inside the page.
 *
 * Usage: npm install && npm run build (in this folder).
 */
const { execFileSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const postcss = require("postcss");

const ROOT = path.join(__dirname, "..", "..");
const CLI = path.join(__dirname, "node_modules", "@tailwindcss", "cli", "dist", "index.mjs");

const TARGETS = [
  {
    input: "delhi.css",
    output: "src/pages/CityLoans/Delhi/delhi.css",
    scope: ".lp-delhi",
  },
  {
    input: "gurgaon.css",
    output: "src/pages/CityLoans/Gurgaon/gurgaon.css",
    scope: ".lp-gurgaon",
  },
  {
    input: "noida.css",
    output: "src/pages/CityLoans/Noida/noida.css",
    scope: ".lp-noida",
  },
];

function compileTailwind(input) {
  const out = path.join(os.tmpdir(), `landing-css-${process.pid}-${path.basename(input)}`);
  execFileSync(process.execPath, [CLI, "-i", input, "-o", out, "--optimize"], {
    cwd: __dirname,
    stdio: ["ignore", "ignore", "inherit"],
  });
  const css = fs.readFileSync(out, "utf8");
  fs.unlinkSync(out);
  return css;
}

function flattenLayers(root) {
  const order = [];
  const buckets = {};
  const unlayered = [];
  const addLayer = (name) => {
    if (!buckets[name]) {
      buckets[name] = [];
      order.push(name);
    }
  };
  root.each((node) => {
    if (node.type === "atrule" && node.name === "layer") {
      if (!node.nodes) {
        node.params.split(",").forEach((name) => addLayer(name.trim()));
      } else {
        addLayer(node.params.trim());
        buckets[node.params.trim()].push(...node.nodes);
      }
    } else if (node.type !== "comment") {
      unlayered.push(node);
    }
  });
  const flat = postcss.root();
  order.forEach((name) => buckets[name].forEach((node) => flat.append(node.clone())));
  unlayered.forEach((node) => flat.append(node.clone()));
  // Layers nested inside other at-rules are rare; unwrap them in place.
  flat.walkAtRules("layer", (rule) => {
    if (rule.nodes) rule.replaceWith(rule.nodes);
    else rule.remove();
  });
  return flat;
}

function scopeSelector(selector, scope) {
  const sel = selector.trim();
  if (sel === ":root" || sel === ":host" || sel === "body") return [scope];
  // Some html rules (scroll-behavior, scroll-padding) only work on the
  // document element itself, so apply them there while the page is mounted.
  if (sel === "html") return [scope, `html:has(${scope})`];
  const rooted = sel.match(/^(?::root|:host|html|body)\s+(.+)$/);
  if (rooted) return [`${scope} ${rooted[1]}`];
  return [`${scope} ${sel}`];
}

function scopeRules(root, scope) {
  root.walkRules((rule) => {
    const parent = rule.parent;
    if (parent && parent.type === "atrule" && /keyframes$/.test(parent.name)) return;
    const scoped = rule.selectors.flatMap((sel) => scopeSelector(sel, scope));
    rule.selectors = [...new Set(scoped)];
  });
}

// oklch -> sRGB, via OKLab (https://bottosson.github.io/posts/oklab/).
function oklchToRgb(l, c, h) {
  const hr = (h * Math.PI) / 180;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);
  const l_ = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m_ = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s_ = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const linear = [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_,
  ];
  return linear.map((x) => {
    const v = x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
    return Math.round(Math.min(1, Math.max(0, v)) * 255);
  });
}

const parseNumber = (token) =>
  token.endsWith("%") ? parseFloat(token) / 100 : parseFloat(token);

function convertOklch(value) {
  return value.replace(/oklch\(([^()]*)\)/g, (match, args) => {
    if (/var\(|from|none/.test(args)) return match;
    const [lch, alphaPart] = args.split("/");
    const [l, c, h] = lch.trim().split(/\s+/);
    if (h === undefined) return match;
    const [r, g, b] = oklchToRgb(parseNumber(l), parseFloat(c), parseFloat(h));
    const alpha = alphaPart === undefined ? 1 : parseNumber(alphaPart.trim());
    if (alpha >= 1) {
      return `#${[r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("")}`;
    }
    return `rgba(${r}, ${g}, ${b}, ${+alpha.toFixed(3)})`;
  });
}

function siteOverrides(scope) {
  return postcss.parse(`
/* App.css sets font-family on every element, which would stop the design's
   fonts from inheriting. */
${scope} * {
  font-family: inherit;
}
/* EmiCalculator.module.css hides number-input spinners on every page. */
${scope} input::-webkit-inner-spin-button,
${scope} input::-webkit-outer-spin-button {
  -webkit-appearance: auto;
  margin: revert;
}
/* On phones App.css also sets overflow-x: hidden on every element. That turns
   each ancestor into a scroll container and breaks the sticky header, so
   restore it on the page and its ancestors, and clip at the wrapper instead. */
${scope} {
  overflow-x: hidden;
  overflow-x: clip;
}
@media (max-width: 500px) {
  ${scope} :not(svg),
  :where(html, body, #root, #root > div):has(${scope}) {
    overflow-x: visible;
  }
}
`);
}

for (const target of TARGETS) {
  const raw = compileTailwind(target.input);
  const root = flattenLayers(postcss.parse(raw));
  scopeRules(root, target.scope);
  root.walkDecls((decl) => {
    if (decl.value.includes("oklch(")) decl.value = convertOklch(decl.value);
  });
  root.prepend(siteOverrides(target.scope).nodes);
  const header = `/* Generated by scripts/landing-css/build.js from scripts/landing-css/${target.input}.\n   Do not edit by hand. */\n`;
  const outFile = path.join(ROOT, target.output);
  fs.writeFileSync(outFile, header + root.toString().trim() + "\n");
  console.log(`${target.output}: ${fs.statSync(outFile).size} bytes`);
}
