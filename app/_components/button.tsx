import { RemixiconComponentType } from "@remixicon/react";

type ButtonSize = "md" | "lg" | "xl" | "2xl";
type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";

export const buttonVariants: ButtonVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "destructive",
];

export const buttonSizes: ButtonSize[] = ["md", "lg", "xl", "2xl"];

const style = {
  base: "inline-flex items-center justify-center rounded focus:outline-none focus:ring",
  size: {
    md: "p-2.5",
    lg: "p-3",
    xl: "p-3.5",
    "2xl": "p-4",
  },
  variant: {
    primary:
      "text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-200 focus:bg-indigo-800",
    secondary:
      "text-neutral-900 bg-white border border-neutral-200 shadow hover:bg-neutral-50 focus:ring-indigo-200 focus:bg-neutral-50",
    tertiary:
      "text-indigo-700 bg-white hover:bg-neutral-50 focus:ring-indigo-200 focus:bg-neutral-50",
    destructive:
      "text-white bg-red-600 hover:bg-red-700 focus:ring-red-200 focus:bg-red-700",
  },
  disabled: {
    primary: "pointer-events-none text-neutral-400 bg-neutral-100",
    secondary: "pointer-events-none text-neutral-400 bg-neutral-100",
    tertiary: "pointer-events-none text-neutral-400 bg-white",
    destructive: "pointer-events-none text-neutral-400 bg-white",
  },
};

interface Props {
  Icon?: RemixiconComponentType;
  ariaLabel?: string;
  isDisabled?: boolean;
  size: ButtonSize;
  text?: string;
  variant: ButtonVariant;
}

export default function Button({
  Icon,
  isDisabled,
  size,
  text,
  variant,
}: Props) {
  return (
    <button
      className={`${style.base} ${style.size[size]} ${isDisabled ? style.disabled[variant] : style.variant[variant]}`}
      tabIndex={isDisabled ? -1 : 0}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}
