import Head from "next/head";
import BlogCard from "../_components/blog-card";

export default function BlogCardPage() {
  return (
    <div className="flex justify-center mt-[120px]">
      <Head>
        <title>Blog Card | UI Component Library | Jason Long</title>
      </Head>
      <BlogCard
        headline="Top 5 Living Room Inspirations"
        subHeadline="Curated vibrants colors for your living, make it pop & calm in the same time."
        imageSrc="blog-card.png"
        imageAlt="A modern living room with a gray cloth loveseat, a round marble table, and standing plants."
      />
    </div>
  );
}
