import type { Metadata } from "next";
import HeroSectionSimple from "../_components/hero-section-simple";

export const metadata: Metadata = {
  title: "Hero Section (Simple) | UI Component Library | Jason Long",
};
export default function HeroSectionSimplePage() {
  return <HeroSectionSimple />;
}
