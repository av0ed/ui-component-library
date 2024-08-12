import Link from "next/link";
import { RemixiconComponentType } from "@remixicon/react";

interface IconButtonProps {
  Icon: RemixiconComponentType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
  classes?: string;
  href?: string;
  isDisabled?: boolean;
}

export default function IconButton({
  Icon,
  onClick,
  ariaLabel,
  classes = "icon--btn--md icon--btn--primary",
  href,
  isDisabled,
}: IconButtonProps) {
  const shouldBeDisabledGray =
    classes.includes("icon--btn--primary") ||
    classes.includes("icon--btn--secondary");

  const disabledClass = shouldBeDisabledGray
    ? "icon--btn--disabled--gray"
    : "icon--btn--disabled--white";

  return href ? (
    <Link
      aria-disabled={isDisabled ? true : false}
      aria-label={ariaLabel}
      className={`${classes} ${isDisabled ? disabledClass : ""}`}
      href={href}
      tabIndex={isDisabled ? -1 : 0}
    >
      {Icon && <Icon />}
    </Link>
  ) : (
    <button
      aria-disabled={isDisabled ? true : false}
      className={classes}
      disabled={isDisabled}
      onClick={onClick}
      tabIndex={isDisabled ? -1 : 0}
    >
      {Icon && <Icon />}
    </button>
  );
}
