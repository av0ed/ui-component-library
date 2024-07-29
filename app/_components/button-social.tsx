import { RemixiconComponentType } from "@remixicon/react";
import Link from "next/link";

interface Props {
  Icon: RemixiconComponentType;
  ariaLabel: string;
  isDisabled?: boolean;
}

export default function ButtonSocial({ Icon, ariaLabel, isDisabled }: Props) {
  return (
    <Link
      aria-label={ariaLabel}
      className={`p-2 rounded hover:bg-neutral-50 focus:ring focus:ring-indigo-200 focus:outline-none ${isDisabled ? "pointer-events-none" : ""}`}
      href="#"
      tabIndex={isDisabled ? -1 : 0}
    >
      <Icon aria-hidden={true} className="w-5 h-5 fill-indigo-700" />
    </Link>
  );
}
