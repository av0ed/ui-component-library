import Button from "../_components/button";
import Image from "next/image";

export default function HeroSectionSimple() {
  return (
    <div className="h-full p-4 bg-gradient-haze">
      <div className="h-full flex flex-col rounded justify-center items-center bg-white">
        <div className="flex flex-col lg:flex-row gap-y-12 md:gap-y-8 lg:gap-x-8 py-12 md:py-16 px-4 lg:p-24 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <div className="flex flex-col lg:justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900">
              Well-crafted abstract images
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-neutral-600">
              High-quality abstract images for your projects, wallpaper, and
              presentations.
            </p>
            <div className="flex flex-row items-start mt-8 md:mt-16 gap-x-4 md:gap-x-8">
              <Button
                classes="btn--xl md:btn--2xl btn--secondary"
                text="Learn more"
                href="/"
              />
              <Button
                classes="btn--xl md:btn--2xl btn--primary"
                text="See pricing"
                href="/"
              />
            </div>
          </div>
          <Image
            src="hero-simple.png"
            className="w-full h-auto mx-auto md:mx-0"
            alt="Abstract, floating cubes"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
