import Image from "next/image";

interface TeamCardProps {
  classes?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  title: string;
}

export default function TeamCard({
  classes,
  description,
  imageAlt,
  imageSrc,
  name,
  title,
}: TeamCardProps) {
  return (
    <div
      className={`flex flex-col items-start w-full max-w-[340px] ${classes}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={340}
        height={296}
        quality={60}
      />
      <span className="mt-6 text-neutral-900 text-xl font-semibold">
        {name}
      </span>
      <span className="mt-1 text-indigo-700 text-lg font-medium">{title}</span>
      <p className="mt-4 text-neutral-600">{description}</p>
    </div>
  );
}
