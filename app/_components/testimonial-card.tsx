import Image from "next/image";

interface Props {
  author: string;
  handle: string;
  blurb: string;
  imageSrc: string;
  imageAlt: string;
}

export default function TestimonialCard({
  author,
  handle,
  blurb,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <div className="max-w-[340px] max-h-[233px] w-full h-full p-6 bg-white flex flex-col rounded-lg shadow-md shadow-neutral-300 gap-4">
      <div className="flex flex-row gap-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={48}
          width={48}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-neutral-900 text-lg font-semibold">{author}</p>
          <p className="text-neutral-600 text-sm">{handle}</p>
        </div>
      </div>
      <p className="text-neutral-600 text-base">{blurb}</p>
    </div>
  );
}
