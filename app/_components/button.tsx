import Link from "next/link";
import { RemixiconComponentType } from "@remixicon/react";

type IconAlign = "left" | "center" | "right" | "surround";

interface Props {
  Icon?: RemixiconComponentType;
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

  const renderCenterContent = () => {
    if (text) {
      return <span>{text}</span>;
    }
    if (Icon && iconAlign === "center") {
      return <Icon />;
    }
  };

  const renderRightIcon = () => {
    if (Icon && (iconAlign === "right" || iconAlign === "surround")) {
      return <Icon />;
    }
  };

  return href ? (
    <Link
      className={`${classes} ${isDisabled ? "btn--disabled" : ""}`}
      href={href}
    >
      {renderLeftIcon()}
      {renderCenterContent()}
      {renderRightIcon()}
    </Link>
  ) : (
    <button className={classes} disabled={isDisabled}>
      <div className={`${text ? "content-spacer" : ""}`}>
        {renderLeftIcon()}
        {renderCenterContent()}
        {renderRightIcon()}
      </div>
    </button>
  );
}
