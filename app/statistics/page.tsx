import Image from "next/image";
import type { Metadata } from "next";

const statistics = [
  {
    id: 0,
    amount: "25,664,890",
    description: "Downloads",
  },
  {
    id: 1,
    amount: "17,219",
    description: "Users",
  },
  {
    id: 2,
    amount: "190,654,321",
    description: "Images in library",
  },
];

export const metadata: Metadata = {
  title: "Statistics  | UI Component Library | Jason Long",
};

export default function StatisticsPage() {
  return (
    <div className="h-full p-4 bg-gradient-haze">
      <div className="w-full h-full bg-white">
        <div className="h-full mx-auto flex flex-col justify-start items-center py-12 px-4 md:py-16 lg:p-24 gap-y-12 md:gap-y-16 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg ">
          <div className="flex flex-col items-center lg:px-8">
            <span className="text-base font-semibold text-indigo-700">
              Statistics
            </span>
            <h1 className="text-center mt-3 text-3xl font-semibold text-neutral-900 md:text-5xl">
              More than premium abstract imagery
            </h1>
            <p className="mt-5 text-center text-xl text-neutral-600">
              Our platform is more than just as a service to us – it is a
              catalyst for enriching lives through premium abstract imagery.
            </p>
          </div>
          <div className="flex flex-col self-stretch lg:flex-row lg:gap-x-8 gap-y-12 md:gap-y-16">
            <Image
              alt="milk-white, floating cubes"
              className="w-full h-auto bg-no-repeat lg:w-1/2"
              src="/stats.png"
              height={0}
              width={0}
              style={{
                objectFit: "cover",
              }}
            />
            <div className="lg:w-1/2 flex flex-col gap-y-6 md:gap-y-8 items-start justify-center">
              <span className="text-lg text-neutral-600">
                Our mission in numbers:
              </span>
              {statistics.map(({ id, amount, description }) => (
                <div
                  key={id}
                  className="flex flex-col self-stretch rounded-lg py-6 gap-y-4 border border-neutral-200 shadow items-center justify-center"
                >
                  <span className="text-indigo-700 font-bold text-4xl md:text-5xl">
                    {amount}
                  </span>
                  <span className="text-xl text-neutral-600">
                    {description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
