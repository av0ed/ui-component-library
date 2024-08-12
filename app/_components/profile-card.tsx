import Image from "next/image";
import Button from "../_components/button";

interface ProfileCardProps {
  blurb: string;
  children: React.ReactNode;
  contactHref: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  role: string;
}

export default function ProfileCard({
  blurb,
  children,
  contactHref,
  imageSrc,
  imageAlt,
  name,
  role,
}: ProfileCardProps) {
  return (
    <div className="w-[340px] py-6 px-4 border-l border-r border-b border-neutral-300 bg-white flex flex-col rounded-lg shadow shadow-neutral-200 gap-y-10">
      <div className="flex flex-col items-center gap-y-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={64}
          width={64}
          className="rounded-full"
        />
        <div className="flex flex-col items-center">
          <p className="text-neutral-900 text-xl font-medium">{name}</p>
          <p className="text-neutral-600 text-sm">{role}</p>
        </div>
        <p className="text-neutral-600 text-center line-clamp-6">{blurb}</p>
      </div>
      <div className="flex flex-col gap-y-6">
        <Button
          href={contactHref}
          classes="btn--lg btn--primary"
          text="Contact me"
        />
        {children}
      </div>
    </div>
  );
}
