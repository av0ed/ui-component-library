import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  headline: string;
  subHeadline: string;
  imageSrc: string;
  imageAlt: string;
}

export default function BlogCard({
  headline,
  subHeadline,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <article className="flex flex-col border border-neutral-300 shadow-sm shadow-neutral-300 bg-white rounded-lg w-[340px]">
      <Image
        className="rounded-t-lg object-cover"
        src={imageSrc}
        alt={imageAlt}
        height={288}
        width={340}
      />
      <div className="px-4 py-6">
        <span className="badge--md badge--success">Interior</span>
        <p className="text-lg font-semibold text-neutral-900 mt-2">
          {headline}
        </p>
        <p className="font-medium text-neutral-600 mt-3">{subHeadline}</p>
        <Link
          href="/"
          aria-label="Read more about this blog post"
          className="inline-flex items-center mt-6 font-medium text-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-800"
        >
          Read more
          <RiArrowRightLine className="ml-1.5 h-5 w-5 fill-indigo-700" />
        </Link>
      </div>
    </article>
  );
}
