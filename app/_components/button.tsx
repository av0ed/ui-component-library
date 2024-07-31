import { RemixiconComponentType } from "@remixicon/react";

interface Props {
  LeftIcon?: RemixiconComponentType;
  RightIcon?: RemixiconComponentType;
  classes: string;
  href?: string;
  isDisabled?: boolean;
  text?: string;
}

export default function Button({
  LeftIcon,
  RightIcon,
  classes,
  href,
  isDisabled,
  text,
}: Props) {
  return (
    <button className={classes} disabled={isDisabled}>
      <div className={`${text ? "wrapper" : ""}`}>
        {LeftIcon && <LeftIcon className="icon" />}
        {text && <span className="text">{text}</span>}
        {RightIcon && <RightIcon className="icon" />}
      </div>
    </button>
  );
}
