import { RemixiconComponentType } from "@remixicon/react";
import Link from "next/link";

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
  base: "inline-flex items-center justify-center",
  size: {
    md: "p-2.5",
    lg: "p-3",
    xl: "p-3.5",
    "2xl": "p-4",
  },
  variant: {
    primary: "text-white rounded bg-indigo-700 hover:bg-indigo-800",
    secondary: "",
    tertiary: "",
    destructive: "",
  },
  disabled: {
    primary: "",
    secondary: "",
    tertiary: "",
    destructive: "",
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
      className={`${style.base} ${style.size[size]} ${style.variant[variant]}`}
      tabIndex={isDisabled ? -1 : 0}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}
