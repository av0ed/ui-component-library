"use client";
import { useState } from "react";
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
    <div className="w-full flex flex-col lg:flex-row pb-4 lg:pb-0 lg:gap-x-24">
      <ul className="flex flex-col lg:flex-row lg:items-center mt-6 lg:mt-0 gap-y-2 lg:gap-x-8">
        {pages.map(({ id, page, href }) => (
          <li className="py-2 px-3 lg:p-0" key={id}>
            <Button
              classes="link--xl link--secondary"
              href={href}
              text={page}
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row mt-6 lg:mt-0 lg:ml-auto">
        <Button classes="btn--xl btn--secondary" text="Learn more" />
        <Button
          classes="btn--xl btn--primary mt-4 md:mt-0 md:ml-4"
          text="Try it out"
        />
      </div>
    </div>
  );
}

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    setShowMenu(!showMenu);
  };

  return (
    <div className="pt-4 mx-auto w-full max-w-screen-sm md:max-w-screen-md px-4 md:px-8 lg:px-28 lg:max-w-screen-lg">
      <nav className="h-[68px] flex flex-row items-center lg:gap-x-24">
        <Link className="flex flex-row items-center" href="/">
          <Image
            src="/abstractly-logo.svg"
            height={32}
            width={32}
            alt="Abstractly logo"
          />
          <span className="text-neutral-900 font-bold px-1">Abstractly</span>
        </Link>
        {showMenu ? (
          <IconButton
            Icon={RiCloseLine}
            onClick={handleClick}
            classes="ml-auto text-neutral-600 lg:hidden"
          />
        ) : (
          <IconButton
            Icon={RiMenuLine}
            classes="ml-auto text-neutral-600 lg:hidden"
            onClick={handleClick}
          />
        )}
        <div className="hidden lg:flex lg:w-full">
          <NavMenu />
        </div>
      </nav>
      <div className="lg:hidden">{showMenu && <NavMenu />}</div>
    </div>
  );
}
