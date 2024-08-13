import type { Metadata } from "next";
import TeamCard from "../_components/team-card";
import ash from "../../public/ash.png";
import joe from "../../public/joe.png";
import farias from "../../public/farias.png";
import sarah from "../../public/sarah.png";

export const metadata: Metadata = {
  title: "Team Section  | UI Component Library | Jason Long",
};
export default function TeamSectionPage() {
  return (
    <div className="w-full bg-white">
      <div className="h-full flex flex-col max-w-screen-lg mx-auto justify-start items-center bg-white py-12 px-4 md:py-16 lg:py-24 lg:px-14 ">
        <div className="flex flex-col items-center lg:px-8">
          <span className="text-base font-semibold text-indigo-700">Team</span>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900 md:text-5xl">
            Meet our team
          </h1>
          <p className="mt-5 text-center text-xl text-neutral-600">
            From skilled designers to tech-savvy developers, each member brings
            a unique perspective and expertise to the table.
          </p>
        </div>
        <div
          className="grid grid-cols-1 items-start justify-center
        gap-y-12 md:grid-cols-2 md:gap-y-16 md:gap-x-8 lg:grid-cols-4 mt-12
        md:mt-16 lg:px-8 max-w-screen-lg"
        >
          <TeamCard
            imageSrc={joe}
            imageAlt="Headshot of Joe Jackson, Founder & CEO"
            name="Joe Jackson"
            title="Founder & CEO"
            description="Joe leads with a strategic vision for innovation and
        growth. With a passion for combining artistry with technology, he
        drives our mission to deliver cutting-edge solutions."
          />
          <TeamCard
            imageSrc={ash}
            imageAlt="Headshot of Ash Karter, Founder & CFO"
            name="Ash Karter"
            title="Founder & CFO"
            description="Ash brings financial acumen and a keen eye for detail to
        our operations. Her leadership ensures sustainable growth and
        operational excellence."
          />
          <TeamCard
            imageSrc={farias}
            imageAlt="Headshot of Joe Jackson, Founder & CEO"
            name="Farias Amed"
            title="Front End AI Engineer"
            description="Farias is at the forefront of AI-driven design,
        developing interfaces that blend intuitive usability with advanced
        functionality."
          />
          <TeamCard
            imageSrc={sarah}
            imageAlt="Headshot of Joe Jackson, Founder & CEO"
            name="Sarah Haust"
            title="Dev Ops"
            description="Sarah orchestrates our development pipelines with
        precision, ensuring seamless deployment cycles and system reliability."
          />
        </div>
      </div>
    </div>
  );
}
