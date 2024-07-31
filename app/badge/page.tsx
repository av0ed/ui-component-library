import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badge | UI Component Library | Jason Long",
};

export default function BadgePage() {
  const badgeVariants = [
    "badge--neutral",
    "badge--danger",
    "badge--warning",
    "badge--success",
    "badge--brand",
  ];
  const badgeSizes = ["badge--sm", "badge--md", "badge--lg"];
  return (
    <div className="pt-[200px] h-screen">
      <div className="flex flex-col justify-center items-start mx-auto gap-y-6 w-[240px]">
        {badgeVariants.map((variant, idx) => (
          <div
            key={`${variant}_${idx}`}
            className="flex flex-row items-center gap-x-6"
          >
            {badgeSizes.map((size, jdx) => (
              <span key={`${size}_${jdx}`} className={`${size} ${variant}`}>
                Label
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
