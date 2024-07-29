import Link from "next/link";
import Image from "next/image";

interface Props {
  blurb: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  name: string;
  role: string;
}

export default function ProfileCard({
  blurb,
  children,
  imageSrc,
  imageAlt,
  name,
  role,
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
        {children}
      </div>
    </div>
  );
}
