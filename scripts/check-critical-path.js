/**
 * Reports what is still render-blocking in <head> for a built page, so the
 * effect of optimize-html.js can be checked without a full Lighthouse run.
 *
 *   node scripts/check-critical-path.js [build/index.html]
 */
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const BUILD = path.join(__dirname, "..", "build");
const file = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(BUILD, "index.html");

const html = fs.readFileSync(file, "utf8");
const head = html.slice(0, html.indexOf("</head>"));

const sizeOf = (url) => {
  const asset = path.join(BUILD, url.split("?")[0]);
  if (!fs.existsSync(asset)) return null;
  const raw = fs.readFileSync(asset);
  return { raw: raw.length, gzip: zlib.gzipSync(raw, { level: 9 }).length };
};

const kb = (n) => (n / 1024).toFixed(1) + " KB";
const blocking = [];
const deferredList = [];

for (const tag of head.match(/<script[^>]*>|<link[^>]*>/g) || []) {
  const href = (tag.match(/(?:src|href)="([^"]+)"/) || [])[1];
  if (!href) continue;

  const isScript = tag.startsWith("<script");
  const isSheet = /rel="?stylesheet/.test(tag);
  if (!isScript && !isSheet) continue;

  const offCriticalPath = isScript
    ? /\s(?:async|defer)[\s=>]/.test(tag)
    : /media="print"/.test(tag);

  (offCriticalPath ? deferredList : blocking).push({
    kind: isScript ? "js " : "css",
    href,
    size: href.startsWith("http") ? null : sizeOf(href),
  });
}

const total = (list) =>
  list.reduce(
    (acc, r) => ({
      raw: acc.raw + (r.size ? r.size.raw : 0),
      gzip: acc.gzip + (r.size ? r.size.gzip : 0),
    }),
    { raw: 0, gzip: 0 }
  );

const show = (label, list) => {
  const t = total(list);
  console.log(`\n${label}: ${list.length} requests  (${kb(t.raw)} raw / ${kb(t.gzip)} gzip)`);
  for (const r of list) {
    const s = r.size ? `${kb(r.size.raw)} raw / ${kb(r.size.gzip)} gzip` : "cross-origin";
    console.log(`  ${r.kind}  ${r.href}  —  ${s}`);
  }
};

console.log(`Critical path for ${path.relative(process.cwd(), file)}`);
show("STILL RENDER-BLOCKING in <head>", blocking);
show("Off the critical path", deferredList);

const cross = blocking.filter((r) => r.href.startsWith("http"));
if (cross.length) {
  console.log(
    `\nWARNING: ${cross.length} blocking cross-origin request(s) — each costs a DNS + TLS round trip.`
  );
}
