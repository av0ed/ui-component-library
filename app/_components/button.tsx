import { RemixiconComponentType } from "@remixicon/react";

interface Props {
  IconLeft?: RemixiconComponentType;
  IconRight?: RemixiconComponentType;
  classes: string;
  href?: string;
  isDisabled?: boolean;
  text?: string;
}

// TODO:
// Restrict acceptable classes to those defined in the Button.module.css file.
export default function Button({
  IconLeft,
  IconRight,
  classes,
  isDisabled,
  text,
}: Props) {
  return (
    <button className={classes} disabled={isDisabled}>
      <div className={`${text ? "wrapper" : ""}`}>
        {IconLeft && <IconLeft className="icon" />}
        {text && <span className="text">{text}</span>}
        {IconRight && <IconRight className="icon" />}
      </div>
    </button>
  );
}
