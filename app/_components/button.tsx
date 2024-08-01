import { RemixiconComponentType } from "@remixicon/react";
import styles from "../_styles/Button.module.css";

type ButtonClassNames = ButtonSizes | ButtonVariants;

interface Props {
  LeftIcon?: RemixiconComponentType;
  RightIcon?: RemixiconComponentType;
  classes: ButtonClassNames;
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
  const buttonClasses = styles[classes];

  return (
    <button className={buttonClasses} disabled={isDisabled}>
      <div className={`${text ? "wrapper" : ""}`}>
        {LeftIcon && <LeftIcon className="icon" />}
        {text && <span className="text">{text}</span>}
        {RightIcon && <RightIcon className="icon" />}
      </div>
    </button>
  );
}
