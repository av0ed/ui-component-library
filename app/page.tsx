import HeroSection from "./_components/hero-section";

const checklistItems = [
  "Minimum 5k image resolution",
  "Various formats available",
  "Retina display support",
];

export default function Home() {
  return (
    <HeroSection
      featureList={checklistItems}
      heading="Premium abstract images"
      imageSrc="/abstract-cubes-2.png"
      imageAlt="Abstract, floating cubes"
    />
  );
}
