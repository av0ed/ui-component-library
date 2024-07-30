import type { Metadata } from "next";
import BlogCard from "../_components/blog-card";

export const metadata: Metadata = {
  title: "Blog Card | UI Component Library | Jason Long",
};
export default function BlogCardPage() {
  return (
    <div className="flex items-start justify-center pt-[120px] bg-gradient-haze h-screen">
      <BlogCard
        headline="Top 5 Living Room Inspirations"
        subHeadline="Curated vibrants colors for your living, make it pop & calm in the same time."
        imageSrc="blog-card.png"
        imageAlt="A modern living room with a gray cloth loveseat, a round marble table, and standing plants."
      />
    </div>
  );
}
