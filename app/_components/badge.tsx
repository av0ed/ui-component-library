type BadgeSize = "sm" | "md" | "lg";
type BadgeState = "brand" | "danger" | "neutral" | "success" | "warning";

export const badgeStates: BadgeState[] = [
  "neutral",
  "danger",
  "warning",
  "success",
  "brand",
];

export const badgeSizes: BadgeSize[] = ["sm", "md", "lg"];

const style = {
  base: "inline-flex items-center justify-center border rounded-full h-fit",
  size: {
    sm: "text-xs py-0.5 px-1.5",
    md: "text-sm py-0.5 px-2",
    lg: "text-sm py-1 px-2.5",
  },
  state: {
    brand: "border-indigo-200 text-indigo-700 bg-indigo-50",
    danger: "border-red-200 text-red-600 bg-red-50",
    neutral: "border-neutral-200 text-neutral-600 bg-gray-50",
    success: "border-green-200 text-green-700 bg-green-50",
    warning: "border-amber-200 text-amber-700 bg-amber-50",
  },
};

interface Props {
  ariaLabel?: string;
  role?: string;
  size: BadgeSize;
  state: BadgeState;
  text: string;
}

export default function Badge({ ariaLabel, role, size, state, text }: Props) {
  return (
    <span
      className={`${style.base} ${style.size[size]} ${style.state[state]}`}
      role={role}
      aria-label={ariaLabel}
    >
      {text}
    </span>
  );
}
