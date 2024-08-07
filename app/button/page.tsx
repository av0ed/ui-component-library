import type { Metadata } from "next";
import { RiStarLine } from "@remixicon/react";
import Button from "../_components/button";

const buttonSizes = ["btn--md", "btn--lg", "btn--xl", "btn--2xl", "btn--2xl"];
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
    <div className="flex flex-col items-center py-28 px-6 md:px-8 lg:px-0">
      <div className="flex flex-col justify-center items-start gap-y-12">
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="btn--md btn--primary" text="Button CTA" />
          <Button
            classes="btn--lg btn--primary"
            Icon={RiStarLine}
            iconAlign="left"
            text="Button CTA"
          />
          <Button
            classes="btn--xl btn--primary"
            Icon={RiStarLine}
            iconAlign="right"
            text="Button CTA"
          />
          <Button classes="btn--2xl btn--primary" text="Button CTA" />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="btn--md btn--secondary" text="Button CTA" />
          <Button
            classes="btn--lg btn--secondary"
            Icon={RiStarLine}
            iconAlign="left"
            text="Button CTA"
          />
          <Button
            classes="btn--xl btn--secondary"
            Icon={RiStarLine}
            iconAlign="right"
            text="Button CTA"
          />
          <Button classes="btn--2xl btn--secondary" text="Button CTA" />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="btn--md btn--tertiary" text="Button CTA" />
          <Button
            classes="btn--lg btn--tertiary"
            Icon={RiStarLine}
            iconAlign="left"
            text="Button CTA"
          />
          <Button
            classes="btn--xl btn--tertiary"
            Icon={RiStarLine}
            iconAlign="right"
            text="Button CTA"
          />
          <Button classes="btn--2xl btn--tertiary" text="Button CTA" />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="link--md link--primary" text="Button CTA" />
          <Button
            classes="link--lg link--primary"
            Icon={RiStarLine}
            iconAlign="left"
            text="Button CTA"
          />
          <Button
            classes="link--xl link--primary"
            Icon={RiStarLine}
            iconAlign="right"
            text="Button CTA"
          />
          <Button classes="link--2xl link--primary" text="Button CTA" />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="link--md link--secondary" text="Button CTA" />
          <Button
            classes="link--lg link--secondary"
            Icon={RiStarLine}
            iconAlign="left"
            text="Button CTA"
          />
          <Button
            classes="link--xl link--secondary"
            Icon={RiStarLine}
            iconAlign="right"
            text="Button CTA"
          />
          <Button classes="link--2xl link--secondary" text="Button CTA" />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <Button classes="btn--md btn--destructive" text="Button CTA" />
          <Button
            classes="btn--lg btn--destructive"
            Icon={RiStarLine}
            iconAlign="left"
            text="Button CTA"
          />
          <Button
            classes="btn--xl btn--destructive"
            Icon={RiStarLine}
            iconAlign="right"
            text="Button CTA"
          />
          <Button classes="btn--2xl btn--destructive" text="Button CTA" />
        </div>
      </div>
    </div>
  );
}
