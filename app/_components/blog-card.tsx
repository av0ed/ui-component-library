import { RiArrowRightLine } from "@remixicon/react";
import Badge from "../_components/badge";
import Button from "../_components/button";
import Image from "next/image";

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
    <article className="flex flex-col border-l border-r border-b border-neutral-200 shadow shadow-neutral-200 bg-white rounded-lg w-[340px]">
      <Image
        className="rounded-t-lg object-cover"
        src={imageSrc}
        alt={imageAlt}
        height={288}
        width={340}
      />
      <div className="px-4 py-6">
        <Badge classes="badge--md badge--success" text="Interior" />
        <p className="text-lg font-semibold text-neutral-900 mt-2">
          {headline}
        </p>
        <p className="font-medium text-neutral-600 mt-3">{subHeadline}</p>
        <Button
          Icon={RiArrowRightLine}
          iconAlign="right"
          href="/"
          ariaLabel="Read more about this blog post"
          classes="mt-6 link--lg link--primary"
          text="Read more"
        />
      </div>
    </article>
  );
}
