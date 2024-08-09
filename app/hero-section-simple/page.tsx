import type { Metadata } from "next";
import HeroSection from "../_components/hero-section";

export const metadata: Metadata = {
  title: "Hero Section | UI Component Library | Jason Long",
};
export default function HeroSectionPage() {
  return (
    <HeroSection
      heading="Well-crafted abstract images"
      subHeading="High-quality abstract images for your projects, wallpaper, and presentations."
      imageSrc="/hero-simple.png"
      imageAlt="Abstract, floating cubes"
    />
  );
}
