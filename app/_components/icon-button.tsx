import Link from "next/link";
import { RemixiconComponentType } from "@remixicon/react";

interface Props {
  Icon: RemixiconComponentType;
  ariaLabel?: string;
  classes?: string;
  href: string;
  isDisabled?: boolean;
}

export default function IconButton({
  Icon,
  ariaLabel,
  classes = "icon--btn--md icon--btn--primary",
  href,
  isDisabled,
}: Props) {
  const shouldBeDisabledGray =
    classes.includes("icon--btn--primary") ||
    classes.includes("icon--btn--secondary");

  const disabledClass = shouldBeDisabledGray
    ? "icon--btn--disabled--gray"
    : "icon--btn--disabled--white";

  return (
    <Link
      aria-disabled={isDisabled ? true : false}
      aria-label={ariaLabel}
      className={`${classes} ${isDisabled ? disabledClass : ""}`}
      href={href}
      tabIndex={isDisabled ? -1 : 0}
    >
      {Icon && <Icon />}
    </Link>
  );
}
