import Image from "next/image";
import type { Metadata } from "next";
import FeatureCard from "../_components/feature-card";
import { RiHdLine, RiWaterPercentLine, RiRainbowLine } from "@remixicon/react";

const features = [
  {
    id: 0,
    icon: RiHdLine,
    feature: "5K resolution support",
    description: `All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.`,
  },
  {
    id: 1,
    icon: RiWaterPercentLine,
    feature: "From water to glass",
    description: `We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.`,
  },
  {
    id: 2,
    icon: RiRainbowLine,
    feature: "Portrait or landscape",
    description: `Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.`,
  },
];

export const metadata: Metadata = {
  title: "Features  | UI Component Library | Jason Long",
};

export default function FeaturesSectionSideImagePage() {
  return (
    <div className="h-full p-4 bg-gradient-haze">
      <div className="w-full h-full bg-white">
        <div className="h-full mx-auto flex flex-col justify-start items-center max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg py-12 px-4 md:py-16 lg:py-24 lg:px-14">
          <div className="flex flex-col items-center md:px-10 lg:px-40">
            <span className="text-base font-semibold text-indigo-700">
              High-quality images
            </span>
            <h1 className="text-center mt-3 text-3xl font-semibold text-neutral-900 md:text-5xl">
              For designers, by designers
            </h1>
            <p className="mt-5 text-center text-xl text-neutral-600">
              Unleash boundless creativity with a large repository of images
              optimized for designers
            </p>
          </div>
          <div className="flex flex-col gap-y-12 mt-12 md:mt-16 lg:gap-y-0 lg:flex-row lg:w-full lg:gap-x-8">
            <div className="flex flex-col items-start justify-center gap-y-10 lg:w-1/2">
              {features.map(({ id, icon, feature, description }) => (
                <FeatureCard
                  key={id}
                  Icon={icon}
                  iconAlign="row"
                  feature={feature}
                  description={description}
                />
              ))}
            </div>
            <Image
              src="/unsplash-md.png"
              alt="colorful, clear cubes on a tile counter"
              height={0}
              width={0}
              className="h-auto w-full rounded shadow-lg lg:w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
