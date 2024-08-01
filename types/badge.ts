export const badgeSizes = ["badge--sm", "badge--md", "badge--lg"] as const;
export const badgeVariants = [
  "badge--neutral",
  "badge--danger",
  "badge--warning",
  "badge--success",
  "badge--brand",
] as const;

export type BadgeSizes = (typeof badgeSizes)[number];
export type BadgeVariants = (typeof badgeVariants)[number];
export type BadgeClasses = BadgeSizes | BadgeVariants;
