import React from "react";
import { cx } from "./cx";

// Base classes of the shadcn Button both Lovable designs were built with.
const BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

// Each design has its own variant and size tables. `as` replaces the Radix
// `asChild` prop: <Button as="a" href="..."> renders a styled link.
export function createButton(variants, sizes) {
  return function Button({
    as: Component = "button",
    variant = "default",
    size = "default",
    className,
    ...props
  }) {
    return (
      <Component
        className={cx(BASE, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  };
}
