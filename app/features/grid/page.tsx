import type { Metadata } from "next";
import FeatureCard from "../../_components/feature-card";
import {
  RiDownload2Line,
  RiBrushLine,
  RiCopyrightLine,
  RiRefund2Fill,
  RiTeamLine,
  RiRefreshLine,
} from "@remixicon/react";

const features = [
  {
    id: 0,
    icon: RiDownload2Line,
    feature: "Infinite Download",
    description: `Once you subscribe to our plans, they're all yours. Download as many as
      you want and use them for work presentations, wallpapers, and much
      more.`,
  },
  {
    id: 1,
    icon: RiBrushLine,
    feature: "Purely Handcrafted",
    description: `No AI, no generic images. Crafted from various chemicals,
fabrics, clouds, or even particles as small as dust.`,
  },
  {
    id: 2,
    icon: RiCopyrightLine,
    feature: "All Are Under License",
    description: `The only limitation with these abstract images is that you
are not able to sell them in any form, whether digital or hard copy (such as
paintings or prints on paper).`,
  },
  {
    id: 3,
    icon: RiRefund2Fill,
    feature: "Cancel Anytime",
    description: `Subscribe at your own pace, and cancel when you feel it's enough.`,
  },
  {
    id: 4,
    icon: RiTeamLine,
    feature: "Empowering For Team",
    description: `We support multiple seats at once, requiring only a single payment.`,
  },
  {
    id: 5,
    icon: RiRefreshLine,
    feature: "No Limitations",
    description: `Use as many as you want, from Dribbble presentations to PowerPoint presentations.`,
  },
];

export const metadata: Metadata = {
  title: "Features  | UI Component Library | Jason Long",
};

export default function FeaturesSectionGridPage() {
  return (
    <div className="h-full mx-auto flex flex-col justify-start items-center max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg py-12 px-4 md:py-16 lg:py-24 lg:px-14">
      <div className="flex flex-col items-center md:px-10 lg:px-40">
        <span className="text-base font-semibold text-indigo-700">
          Premium abstract images
        </span>
        <h1 className="text-center mt-3 text-3xl font-semibold text-neutral-900 md:text-5xl">
          Easy access to top quality images
        </h1>
        <p className="mt-5 text-center text-xl text-neutral-600">
          In a world where storytelling constantly evolves, we lead with
          groundbreaking images designed for your presentation excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 items-start justify-center gap-y-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-12 md:mt-16 lg:gap-y-12 lg:gap-x-8">
        {features.map(({ id, icon, feature, description }) => (
          <FeatureCard
            key={id}
            Icon={icon}
            iconAlign="col"
            feature={feature}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
