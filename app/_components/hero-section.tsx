import Button from "../_components/button";
import Image from "next/image";
import ChecklistItem from "../_components/checklist-item";

interface Props {
  featureList?: string[];
  heading: string;
  imageAlt: string;
  imageSrc: string;
  subHeading?: string;
}

export default function HeroSection({
  featureList,
  heading,
  imageAlt,
  imageSrc,
  subHeading,
}: Props) {
  return (
    <div className="h-full p-4 bg-gradient-haze">
      <div className="h-full flex flex-col rounded justify-center items-center bg-white">
        <div className="flex flex-col lg:flex-row gap-y-12 md:gap-y-8 lg:gap-x-8 py-12 md:py-16 px-4 lg:p-24 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <div className="flex flex-col lg:justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900">
              {heading}
            </h1>
            {featureList ? (
              <ul className="flex flex-col gap-y-5 mt-8 md:mt-16">
                {featureList.map((text, idx) => (
                  <ChecklistItem key={idx} text={text} />
                ))}
              </ul>
            ) : (
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-neutral-600">
                {subHeading}
              </p>
            )}
            <div className="flex flex-row-reverse justify-end mt-8 md:justify-start md:flex-row md:mt-16 gap-x-4 md:gap-x-8">
              <Button
                classes="btn--xl md:btn--2xl btn--secondary"
                text="Learn more"
                href="/"
              />
              <Button
                classes="btn--xl md:btn--2xl btn--primary"
                text="See pricing"
                href="/"
              />
            </div>
          </div>
          <Image
            src={imageSrc}
            className="w-auto mx-auto md:mx-0"
            alt={imageAlt}
            width={0}
            height={526}
          />
        </div>
      </div>
    </div>
  );
}
