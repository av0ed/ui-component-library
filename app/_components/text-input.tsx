import { RemixiconComponentType } from "@remixicon/react";

// Customizable: The component should be allow for customizing of the label,
// placeholder, hint text, error message.
//
// Icons: Optional icons can be added at the front or back or both sides of the
// input field.
//
// States: The follow states should be supported: Normal, Filled, Focused,
// Disabled, Error and other reasonable combinations.

interface Props {
  IconLeft?: RemixiconComponentType;
  IconRight?: RemixiconComponentType;
  errorMsg: string;
  hintMsg: string;
  isDisabled?: boolean;
  label: string;
  placeholder?: string;
}

export default function TextInput({
  IconLeft,
  IconRight,
  errorMsg,
  hintMsg,
  isDisabled,
  label,
  placeholder,
}: Props) {
  return (
    <>
      <label>
        {label}
        <input type="text" placeholder={placeholder} disabled={isDisabled} />
      </label>
    </>
  );
}
