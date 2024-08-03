import { RemixiconComponentType } from "@remixicon/react";

interface Props {
  IconLeft?: RemixiconComponentType;
  IconRight?: RemixiconComponentType;
  errorMsg?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hintMsg?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  label: string;
  placeholder?: string;
  type: "email" | "password" | "text";
}

const classes = {
  base: {
    errorMsg: "font-normal text-red-600",
    hintMsg: "font-normal text-neutral-500",
    icon: "absolute text-neutral-400",
    input:
      "flex items-center w-full text-neutral-900 border border-neutral-200 bg-neutral-50 rounded gap-x-2 py-2.5 px-3.5 text-ellipsis overflow-hidden font-normal placeholder-neutral-500 focus:outline-none focus:ring ",
    label:
      "flex flex-col gap-y-1.5 font-medium text-sm text-neutral-700 w-full max-w-[340px]",
  },
  disabled: {
    input:
      "disabled:pointer-events-none disabled:border-neutral-100 disabled:placeholder-neutral-400",
  },
  error: {
    input: "focus:ring-red-200 focus:border-red-600",
  },
  focus: {
    input: "focus:ring-indigo-200 focus:border-indigo-600",
  },
};

export default function TextInput({
  IconLeft,
  IconRight,
  errorMsg,
  onChange,
  hintMsg,
  isDisabled,
  isRequired,
  label,
  placeholder,
  type,
}: Props) {
  return (
    <label className={classes.base.label}>
      {label}
      <div className="flex items-center relative">
        {IconLeft && (
          <IconLeft className={`${classes.base.icon} left-3.5 h-5 w-5`} />
        )}
        <input
          className={`${classes.base.input} ${classes.disabled.input} ${classes.focus.input} ${IconLeft ? "pl-[42px]" : ""} ${IconRight ? "pr-[38px]" : ""}`}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
          required={isRequired}
        />
        {IconRight && (
          <IconRight className={`${classes.base.icon} right-3.5 h-4 w-4`} />
        )}
      </div>
      <span className={classes.base.hintMsg}>{hintMsg}</span>
      <span className={classes.base.errorMsg}>{errorMsg}</span>
    </label>
  );
}
