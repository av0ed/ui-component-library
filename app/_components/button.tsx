import { RemixiconComponentType } from "@remixicon/react";
import Link from "next/link";

type ButtonSize = "md" | "lg" | "xl" | "2xl";

interface Props {
  IconLeft?: RemixiconComponentType;
  IconRight?: RemixiconComponentType;
  ariaLabel?: string;
  isDisabled?: boolean;
  text?: string;
  size?: ButtonSize;
}

export default function Button({
  IconLeft,
  IconRight,
  ariaLabel,
  isDisabled,
  size,
  text,
}: Props) {
  return (
    <Link
      aria-label={ariaLabel}
      className={`flex flex-row p-2 rounded hover:bg-neutral-50 focus:ring focus:ring-indigo-200 focus:outline-none ${isDisabled ? "pointer-events-none" : ""}`}
      href="#"
      tabIndex={isDisabled ? -1 : 0}
    >
      {IconLeft && (
        <IconLeft aria-hidden={true} className="w-5 h-5 fill-indigo-700" />
      )}
      {text}
      {IconRight && (
        <IconRight aria-hidden={true} className="w-5 h-5 fill-indigo-700" />
      )}
    </Link>
  );
}
