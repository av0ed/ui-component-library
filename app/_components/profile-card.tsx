import Image from "next/image";
import {
  RiTwitterXFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";

interface Props {
  name: string;
  role: string;
  blurb: string;
  imageSrc: string;
  imageAlt: string;
}

// Todo: butttons will later be replaced with components.
export default function TestimonialCard({
  name,
  role,
  blurb,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <div className="w-[340px] py-6 px-4 bg-white flex flex-col rounded-lg shadow-sm shadow-neutral-300 gap-y-10">
      <div className="flex flex-col items-center gap-y-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={64}
          width={64}
          className="rounded-full"
        />
        <div className="flex flex-col items-center gap-y-1">
          <p className="text-neutral-900 text-xl font-medium">{name}</p>
          <p className="text-neutral-600 text-sm">{role}</p>
        </div>
        <p className="text-neutral-600 text-center line-clamp-6">{blurb}</p>
      </div>
      <div className="flex flex-col gap-y-6">
        <button className="flex items-center justify-center self-stretch px-4 py-2.5 bg-indigo-700 text-white font-medium">
          Contact me
        </button>
        <div className="flex flex-row justify-center gap-x-4">
          <button className="p-2">
            <RiGithubFill className="w-5 h-5 fill-indigo-700" />
          </button>
          <button className="p-2">
            <RiLinkedinBoxFill className="w-5 h-5 fill-indigo-700" />
          </button>
          <button className="p-2">
            <RiInstagramFill className="w-5 h-5 fill-indigo-700" />
          </button>
          <button className="p-2">
            <RiTwitterXFill className="w-5 h-5 fill-indigo-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
