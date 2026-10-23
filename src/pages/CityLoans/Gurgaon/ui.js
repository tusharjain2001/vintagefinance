import { createButton } from "../shared/createButton";

// The Gurgaon design styles its buttons with its own loan-button classes on
// top of the shadcn base.
export const Button = createButton(
  {
    loan: "loan-button loan-button-primary",
    ink: "loan-button loan-button-ink",
    paper: "loan-button loan-button-paper",
    nav: "loan-button loan-button-nav",
  },
  {
    default: "h-9 px-4 py-2",
  }
);
