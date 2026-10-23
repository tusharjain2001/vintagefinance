// Joins Tailwind class lists the way the Lovable source's cn()/tailwind-merge
// did for the cases these pages rely on: when two classes set the same thing
// (h-9 then h-11, font-medium then font-bold) only the later one is kept.
// Utilities of one kind compile to rules of equal specificity, so without this
// the winner would depend on the order Tailwind happens to emit them in.
const GROUPS = [
  ["h", /^h-/],
  ["w", /^w-/],
  ["px", /^px-/],
  ["py", /^py-/],
  ["rounded", /^rounded(-|$)/],
  ["weight", /^font-(thin|light|normal|medium|semibold|bold|extrabold|black)$/],
  ["size", /^text-(xs|sm|base|lg|xl|[2-9]xl)$/],
  ["bg", /^bg-/],
  ["shadow", /^shadow(-|$)/],
];

// Splits "md:hover:text-sm" into ["md:hover:", "text-sm"], ignoring colons
// inside arbitrary variants such as "[&_svg]:size-4".
function splitVariant(token) {
  let depth = 0;
  let cut = 0;
  for (let i = 0; i < token.length; i++) {
    const ch = token[i];
    if (ch === "[") depth++;
    else if (ch === "]") depth--;
    else if (ch === ":" && depth === 0) cut = i + 1;
  }
  return [token.slice(0, cut), token.slice(cut)];
}

function groupOf(token) {
  const [variant, utility] = splitVariant(token);
  const match = GROUPS.find(([, pattern]) => pattern.test(utility));
  return match ? variant + match[0] : null;
}

export function cx(...lists) {
  const tokens = lists.filter(Boolean).join(" ").split(/\s+/).filter(Boolean);
  const lastIndexOfGroup = {};
  tokens.forEach((token, index) => {
    const group = groupOf(token);
    if (group) lastIndexOfGroup[group] = index;
  });
  return tokens
    .filter((token, index) => {
      const group = groupOf(token);
      return !group || lastIndexOfGroup[group] === index;
    })
    .join(" ");
}
