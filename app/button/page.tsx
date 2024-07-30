import type { Metadata } from "next";
import Button, { buttonSizes, buttonVariants } from "../_components/button";
import { RiStarLine } from "@remixicon/react";

export const metadata: Metadata = {
  title: "Button | UI Component Library | Jason Long",
};

export default function ButtonPage() {
  return (
    <div className="pt-[200px] h-screen">
      <div className="flex flex-col justify-center items-start mx-auto gap-y-6 w-[240px]">
        {buttonVariants.map((variant, idx) => (
          <div
            key={`${variant}_${idx}`}
            className="flex flex-row items-center gap-x-6"
          >
            {buttonSizes.map((size, jdx) => (
              <Button
                key={`${size}_${jdx}`}
                size={size}
                variant={variant}
                Icon={RiStarLine}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
