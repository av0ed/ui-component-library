import Link from "next/link";
import Image from "next/image";
import abstractBackground from "../public/abstract-background.jpg";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center h-screen">
      <Image
        alt="An abstract, flowing background"
        className="fixed h-screen w-screen overflow-hidden -z-10"
        fill
        placeholder="blur"
        quality={50}
        src={abstractBackground}
        style={{
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col py-12 md:py-16 px-3 md:px-4 lg:p-24">
        <span className="font-semibold text-indigo-700">Not found</span>
        <h1 className="mt-2 md:mt-3 text-4xl md:text-5xl font-semibold text-neutral-900">
          We can&apos;t find the page
        </h1>
        <p className="mt-5 md:mt-6 text-lg md:text-xl text-neutral-600">
          Sorry, the page you are looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          className="mt-8 md:mt-16 flex items-center justify-center self-stretch md:self-start text-base md:text-lg rounded px-4 py-2.5 md:py-4 md:px-6 bg-indigo-700 text-white font-medium hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-indigo-200"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
