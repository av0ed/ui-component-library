"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../_components/button";
import IconButton from "../_components/icon-button";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

const pages = [
  { id: 0, page: "Home", href: "/" },
  { id: 1, page: "Features", href: "/" },
  { id: 2, page: "Pricing", href: "/" },
  { id: 3, page: "About Us", href: "team-section" },
  { id: 4, page: "Contact", href: "/" },
];

function NavMenu() {
  return (
    <nav className="flex flex-col pt-8 px-4 pb-4">
      <div className="flex flex-row items-center">
        <Link className="flex flex-row items-center" href="/">
          <Image
            src="/abstractly-logo.svg"
            height={32}
            width={32}
            alt="Abstractly logo"
          />
          <span className="text-neutral-900 font-bold px-1">Abstractly</span>
        </Link>
        <IconButton Icon={RiCloseLine} classes="ml-auto text-neutral-600" />
      </div>
      <ul className="flex flex-col mt-6 gap-y-2">
        {pages.map(({ id, page, href }) => (
          <li className="py-2 px-3" key={id}>
            <Button
              classes="link--xl link--secondary"
              href={href}
              text={page}
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row mt-6">
        <Button classes="btn--xl btn--secondary" text="Learn more" />
        <Button
          classes="btn--xl btn--primary mt-4 md:mt-0 md:ml-4"
          text="Try it out"
        />
      </div>
    </nav>
  );
}

export default function Navbar() {
  const handleClick = () => {
    console.log("Hi");
  };
  return (
    <div className=" pt-4 lg:px-28">
      <nav className="h-[68px] flex flex-row items-center px-4">
        <Link className="flex flex-row items-center" href="/">
          <Image
            src="/abstractly-logo.svg"
            height={32}
            width={32}
            alt="Abstractly logo"
          />
          <span className="text-neutral-900 font-bold px-1">Abstractly</span>
        </Link>
        <IconButton
          Icon={RiMenuLine}
          classes="ml-auto text-neutral-600"
          onClick={handleClick}
        />
      </nav>
    </div>
  );
}
//
// export default function Navbar() {
//   const pages = [
//     "404 Section",
//     "Badge",
//     "Button",
//     "Blog Card",
//     "Hero Section Simple",
//     "Icon Button",
//     "Profile Card",
//     "Team Section",
//     "Testimonial Card",
//     "Text Area",
//     "Text Input",
//   ];
//   return (
//     <ul className="flex flex-row p-4 justify-center gap-x-8 flex-nowrap">
//       {pages.map((page) => (
//         <li key={page}>
//           <Button
//             classes="link--lg link--primary"
//             href={makeLink(page)}
//             text={page}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }
