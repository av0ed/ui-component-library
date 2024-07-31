import type { Metadata } from "next";
import { RiStarLine } from "@remixicon/react";
import Button from "../_components/button";

export const metadata: Metadata = {
  title: "Button | UI Component Library | Jason Long",
};

export default function ButtonPage() {
  const buttonVariants = [
    "btn--primary",
    "btn--secondary",
    "btn--tertiary",
    "btn--destructive",
  ];
  const buttonSizes = ["btn--md", "btn--lg", "btn--xl", "btn--2xl"];
  return (
    <div className="h-screen py-28 px-6 md:px-8 lg:px-0">
      <div className="flex flex-col justify-center items-center mx-auto gap-y-12">
        {buttonVariants.map((variant, idx) => (
          <div
            key={`${variant}_${idx}`}
            className="flex flex-row items-center gap-x-5"
          >
            {buttonSizes.map((size, jdx) => (
              <Button
                key={`${size}_${jdx}`}
                LeftIcon={RiStarLine}
                RightIcon={RiStarLine}
                classes={`${size} ${variant}`}
                text="Button CTA"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
// <button key={`${size}_${jdx}`} className={`${size} ${variant}`}>
//   <RiStarLine className="h-5 w-5" />
//   Label
//   <RiStarLine className="h-5 w-5" />
// </button>
