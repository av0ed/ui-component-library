import { MdOutlineArrowForward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

interface Props {
  headline: string;
  subHeadline: string;
  imageSrc: string;
  imageAlt: string;
}

// TODO: later, the "pill" tag will be replaced by its own component.
export default function BlogCard({
  headline,
  subHeadline,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <article className="flex flex-col shadow-md bg-white rounded-lg w-[340px]">
      <Image
        className="rounded-t-lg"
        src={imageSrc}
        alt={imageAlt}
        height={288}
        width={340}
      />
      <div className="px-4 py-6">
        <span className="border border-green-200 bg-green-50 px-2 py-0.5 rounded-full">
          <span className="text-sm text-green-700">Interior</span>
        </span>
        <p className="text-lg font-semibold text-neutral-900 mt-2">
          {headline}
        </p>
        <p className="font-medium text-neutral-600 mt-3">{subHeadline}</p>
        <Link
          href="#"
          aria-label="Read more about this blog post"
          className="inline-flex items-center mt-6 font-medium text-indigo-700 decoration-2 underline-offset-4 hover:underline"
        >
          Read more
          <MdOutlineArrowForward className="ml-1.5 h-5 w-5 fill-indigo-700" />
        </Link>
      </div>
    </article>
  );
}
