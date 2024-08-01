import type { Metadata } from "next";
import { RiStarLine } from "@remixicon/react";
import Button from "../_components/button";

const buttonSizes = ["btn--md", "btn--lg", "btn--xl", "btn--2xl"];
const buttonVariants = [
  "btn--primary",
  "btn--secondary",
  "btn--tertiary",
  "btn--destructive",
];

export const metadata: Metadata = {
  title: "Button | UI Component Library | Jason Long",
};

export default function ButtonPage() {
  return (
    <div className="h-screen py-28 px-6 md:px-8 lg:px-0">
      {buttonVariants.map((variant, idx) => (
        <div
          className="flex flex-col justify-center items-center mx-auto gap-y-12"
          key={`${variant}_${idx}`}
        >
          {buttonSizes.map((size, jdx) => (
            <div
              className="flex flex-row items-center gap-x-5"
              key={`${size}_${jdx}`}
            >
              <Button classes={`${size} ${variant}`}>
                <RiStarLine />
                Test
                <RiStarLine />
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
