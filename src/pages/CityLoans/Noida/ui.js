import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cx } from "../shared/cx";
import { createButton } from "../shared/createButton";

// Plain-React versions of the shadcn components the Noida Lovable page used.
// They keep the original classes; the Radix popover select and slider are
// swapped for native controls styled to match, which also behave better on
// phones.

export const Button = createButton(
  {
    hero: "bg-primary text-primary-foreground shadow-lg hover:bg-primary/88",
    dark: "bg-foreground text-background shadow hover:bg-foreground/90",
    outline:
      "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
  },
  {
    lg: "h-12 rounded-md px-7 text-sm font-bold",
  }
);

export function Label({ className, ...props }) {
  return (
    <label
      className={cx(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  );
}

export function Input({ className, ...props }) {
  return (
    <input
      className={cx(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export function Select({ id, value, onChange, options, className }) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cx(
          "flex h-9 w-full appearance-none items-center whitespace-nowrap rounded-md border border-input bg-transparent py-2 pl-3 pr-9 text-sm shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-ring",
          className
        )}
      >
        {options.map(([optionValue, label]) => (
          <option key={optionValue} value={optionValue}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
    </div>
  );
}

export function Slider({ value, min, max, step, onChange, ...props }) {
  const fill = max > min ? ((value - min) / (max - min)) * 100 : 0;
  // Like the Radix root, the wrapper only takes the track's height in layout;
  // the thumb overflows it.
  return (
    <div className="relative flex h-1.5 w-full touch-none select-none items-center">
      <input
        type="range"
        className="noida-slider"
        style={{ "--fill": `${fill}%` }}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        {...props}
      />
    </div>
  );
}

export function Checkbox({ checked, onCheckedChange, className }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      onClick={() => onCheckedChange(!checked)}
      className={cx(
        "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
    >
      {checked && (
        <span className="grid place-content-center text-current">
          <Check className="h-4 w-4" />
        </span>
      )}
    </button>
  );
}

// Single-open, collapsible accordion with the shadcn trigger/content styling.
export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className={className}>
      {items.map(([question, answer], index) => {
        const open = openIndex === index;
        const state = open ? "open" : "closed";
        return (
          <div key={question} className="border-b" data-state={state}>
            <h3 className="flex">
              <button
                type="button"
                id={`faq-trigger-${index}`}
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
                data-state={state}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex flex-1 items-center justify-between py-6 text-base font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180"
              >
                {question}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
              </button>
            </h3>
            {open && (
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
                className="overflow-hidden text-sm"
              >
                <div className="pb-6 pt-0 leading-7 text-muted-foreground">{answer}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
