import type { Metadata } from "next";
import Badge, { badgeSizes, badgeStates } from "../_components/badge";

export const metadata: Metadata = {
  title: "Badge | UI Component Library | Jason Long",
};

export default function BadgePage() {
  return (
    <div className="flex flex-col items-center gap-y-6 justify-center pt-[200px]">
      {badgeStates.map((state, idx) => (
        <div
          key={`${state}_${idx}`}
          className="flex flex-row items-center gap-x-6"
        >
          {badgeSizes.map((size, jdx) => (
            <Badge
              key={`${size}_${jdx}`}
              size={size}
              state={state}
              text="Label"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
