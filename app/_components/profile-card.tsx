import Link from "next/link";
import Image from "next/image";
import ButtonSocial from "../_components/button-social";
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

export default function ProfileCard({
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
        <Link
          href="#"
          className="flex items-center justify-center self-stretch rounded px-4 py-2.5 bg-indigo-700 text-white font-medium hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Contact me
        </Link>
        <div className="flex flex-row justify-center gap-x-4">
          <ButtonSocial
            Icon={RiGithubFill}
            ariaLabel="Follow Sarah Dole on Github"
          />
          <ButtonSocial
            Icon={RiLinkedinBoxFill}
            ariaLabel="Follow Sarah Dole on LinkedIn"
          />
          <ButtonSocial
            Icon={RiInstagramFill}
            ariaLabel="Follow Sarah Dole on Instagram"
          />
          <ButtonSocial
            Icon={RiTwitterXFill}
            ariaLabel="Follow Sarah Dole on X"
          />
        </div>
      </div>
    </div>
  );
}
