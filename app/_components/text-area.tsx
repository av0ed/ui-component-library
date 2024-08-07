interface Props {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  label: string;
  placeholder?: string;
}

const classes = {
  error: "font-normal text-red-600",
  input: `flex items-center w-full text-neutral-900 border border-neutral-200
      bg-neutral-50 rounded gap-x-2 py-2.5 px-3.5 text-ellipsis overflow-hidden
      font-normal placeholder-neutral-500 focus:outline-none focus:ring
      disabled:pointer-events-none disabled:border-neutral-100
      disabled:placeholder-neutral-400`,
  inputError: "focus:ring-red-200 focus:border-red-600",
  inputFocus: "focus:ring-indigo-200 focus:border-indigo-600",
  inputWrapper: "flex items-center relative",
  label: `flex flex-col gap-y-1.5 font-medium text-sm text-neutral-700 w-full
    max-w-[340px]`,
};

export default function TextArea({
  onChange,
  error,
  isDisabled,
  isRequired,
  label,
  placeholder,
}: Props) {
  const inputClasses = `
    ${classes.input} 
    ${error ? classes.inputError : classes.inputFocus} 
  `;

  return (
    <label className={classes.label}>
      {label}
      <div className={classes.inputWrapper}>
        <textarea
          aria-invalid={!!error}
          aria-required={isRequired}
          className={inputClasses}
          disabled={isDisabled}
          onChange={onChange}
          placeholder={placeholder}
          required={isRequired}
        />
      </div>
      {error && <span className={classes.error}>{error}</span>}
    </label>
  );
}
