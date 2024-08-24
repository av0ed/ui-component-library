"use client";
import Button from "../_components/button";
import TextInput from "../_components/text-input";
import Image from "next/image";
import ChecklistItem from "../_components/checklist-item";

const featureList = [
  "Exclusive access to new abstract images and collections",
  "Unlock special promotions only for subscribers",
  "Regular doses of artistic inspiration",
];

export default function NewsletterPage() {
  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    console.log("Clicked.");
  };
  return (
    <div className="flex flex-col lg:flex-row gap-y-12 md:gap-y-8 lg:gap-x-8">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900">
          Get the finest curated abstracts delivered weekly to your inbox.
        </h1>
        <ul className="flex flex-col gap-y-5 mt-8 md:mt-16">
          {featureList.map((text, idx) => (
            <ChecklistItem key={idx} text={text} />
          ))}
        </ul>
        <div className="flex flex-col mt-8 md:mt-12">
          <form className="flex flex-col md:flex-row items-start md:items-end">
            <TextInput
              type="text"
              label="Email"
              placeholder="Enter your email"
            />
            <p className="text-neutral-600 mt-3 md:order-2">
              We only send you the best articles! No spam.
            </p>
            <Button
              classes="btn--md btn--primary mt-4 self-stretch md:ml-4 md:self-end md:order-1"
              text="Subscribe"
            />
          </form>
        </div>
      </div>
      <Image
        alt="Earth-toned waves"
        className="w-auto mt-4 md:mt-16 lg:mt-0"
        height={0}
        src="/newsletter.png"
        style={{ objectFit: "cover" }}
        width={0}
      />
    </div>
  );
}
