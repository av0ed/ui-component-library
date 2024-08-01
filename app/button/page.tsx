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
              <Button
                IconRight={RiStarLine}
                classes={`${size} ${variant}`}
                isDisabled={true}
              />
              <Button IconRight={RiStarLine} classes={`${size} ${variant}`} />
              <Button
                IconLeft={RiStarLine}
                IconRight={RiStarLine}
                classes={`${size} ${variant}`}
                text="Button CTA"
                isDisabled={true}
              />
              <Button
                IconLeft={RiStarLine}
                IconRight={RiStarLine}
                classes={`${size} ${variant}`}
                text="Button CTA"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
