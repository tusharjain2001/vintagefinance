/**
 * Post-build pass over the prerendered HTML.
 *
 * react-snap snapshots the DOM after the page has run. By that point webpack's
 * jsonp loader has appended a <script>/<link> pair to <head> for every chunk the
 * homepage touched, so those tags get serialised into the shipped HTML as
 * render-blocking resources. On the homepage that is nine below-the-fold
 * sections (Footer, Faq, Rating, Numbers, ...) holding up first paint.
 *
 * This rewrites those tags to load off the critical path. Run after react-snap.
 */
const fs = require("fs");
const path = require("path");

const BUILD = path.join(__dirname, "..", "build");

function htmlFiles(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) htmlFiles(full, found);
    else if (entry.name.endsWith(".html")) found.push(full);
  }
  return found;
}

// defer, not async: webpack's runtime expects chunks to register in document
// order, and defer preserves that while async does not.
const SCRIPT = /<script(?![^>]*\s(?:async|defer)[\s=>])([^>]*\ssrc="\/static\/js\/[^"]+"[^>]*)>/g;

// main.*.chunk.css carries the header and hero styles, so it stays blocking.
// Every other chunk stylesheet belongs to a section below the fold.
const STYLE = /<link([^>]*\shref="\/static\/css\/(?!main\.)[^"]+\.chunk\.css"[^>]*)>/g;

let files = 0;
let deferred = 0;
let unblocked = 0;

for (const file of htmlFiles(BUILD)) {
  const before = fs.readFileSync(file, "utf8");
  let after = before.replace(SCRIPT, (_, attrs) => {
    deferred++;
    return `<script defer${attrs}>`;
  });

  after = after.replace(STYLE, (tag, attrs) => {
    if (/\smedia=/.test(attrs)) return tag;
    unblocked++;
    return `<link${attrs} media="print" onload="this.media='all'">`;
  });

  if (after !== before) {
    fs.writeFileSync(file, after);
    files++;
  }
}

console.log(
  `optimize-html: ${deferred} scripts deferred, ${unblocked} stylesheets unblocked across ${files} files`
);
