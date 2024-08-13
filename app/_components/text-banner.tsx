interface TextBannerProps {
  eyebrow: string;
  heading: string;
  subheading: string;
}

export default function TextBanner({
  eyebrow,
  heading,
  subheading,
}: TextBannerProps) {
  return (
    <div className="flex flex-col items-center md:px-10 lg:px-40">
      <span className="text-base font-semibold text-indigo-700">{eyebrow}</span>
      <h1 className="text-center mt-3 text-3xl font-semibold text-neutral-900 md:text-5xl">
        {heading}
      </h1>
      <p className="mt-5 text-center text-xl text-neutral-600">{subheading}</p>
    </div>
  );
}
