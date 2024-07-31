import type { Metadata } from "next";
import Button, { buttonSizes, buttonVariants } from "../_components/button";
import { RiStarLine } from "@remixicon/react";

export const metadata: Metadata = {
  title: "Button | UI Component Library | Jason Long",
};

export default function ButtonPage() {
  return (
    <div className="h-screen py-28 px-6 md:px-8 lg:px-0">
      <div className="flex flex-col justify-center items-start mx-auto gap-y-12 w-[240px]">
        {buttonVariants.map((variant, idx) => (
          <div
            key={`${variant}_${idx}`}
            className="flex flex-row items-center gap-x-5"
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
