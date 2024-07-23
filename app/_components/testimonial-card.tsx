import Image from "next/image";

interface Props {
  name: string;
  username: string;
  testimonial: string;
  imageSrc: string;
  imageAlt: string;
}

export default function TestimonialCard({
  name,
  username,
  testimonial,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <div className="max-w-[340px] w-full h-fit p-6 bg-white flex flex-col rounded-lg shadow-md shadow-neutral-300 gap-4">
      <div className="flex flex-row gap-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={48}
          width={48}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-neutral-900 text-lg font-semibold">{name}</p>
          <p className="text-neutral-600 text-sm">{username}</p>
        </div>
      </div>
      <p className="text-neutral-600 text-base line-clamp-6">{testimonial}</p>
    </div>
  );
}
