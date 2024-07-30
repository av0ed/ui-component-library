import type { Metadata } from "next";
import Badge, { badgeSizes, badgeStates } from "../_components/badge";

export const metadata: Metadata = {
  title: "Badge | UI Component Library | Jason Long",
};

export default function BadgePage() {
  return (
    <div className="pt-[200px] h-screen">
      <div className="flex flex-col justify-center items-start mx-auto gap-y-6 w-[240px]">
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
    </div>
  );
}
