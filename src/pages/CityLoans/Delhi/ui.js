import { createButton } from "../shared/createButton";

export const Button = createButton(
  {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    brand: "bg-primary text-primary-foreground hover:bg-primary/85 font-semibold",
    ink: "bg-foreground text-background hover:bg-foreground/85 font-semibold",
    outline:
      "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  },
  {
    default: "h-9 px-4 py-2",
    cta: "h-12 px-6 text-sm rounded-md",
  }
);

export const whatsapp = (text) =>
  `https://wa.me/919899055381?text=${encodeURIComponent(text)}`;
