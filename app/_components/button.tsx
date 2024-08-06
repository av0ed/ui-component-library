import Link from "next/link";
import { RemixiconComponentType } from "@remixicon/react";

type IconAlign = "left" | "right" | "surround";

interface Props {
  Icon?: RemixiconComponentType;
  ariaLabel?: string;
  classes: string;
  href?: string;
  iconAlign?: IconAlign;
  isDisabled?: boolean;
  text?: string;
}

export default function Button({
  Icon,
  classes,
  href,
  iconAlign = "right",
  isDisabled,
  text,
}: Props) {
  const renderLeftIcon = () => {
    if (Icon && (iconAlign === "left" || iconAlign === "surround")) {
      return <Icon />;
    }
  };

  const renderRightIcon = () => {
    if (Icon && (iconAlign === "right" || iconAlign === "surround")) {
      return <Icon />;
    }
  };

  const renderContent = () => {
    return (
      <div className={`${text ? "content-spacer" : ""}`}>
        {renderLeftIcon()}
        {text && <span>{text}</span>}
        {renderRightIcon()}
      </div>
    );
  };

  return href ? (
    <Link
      className={`${classes} ${isDisabled ? "btn--disabled" : ""}`}
      href={href}
    >
      {renderContent()}
    </Link>
  ) : (
    <button className={classes} disabled={isDisabled}>
      {renderContent()}
    </button>
  );
}
