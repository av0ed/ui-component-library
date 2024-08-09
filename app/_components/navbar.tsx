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
    <nav
      aria-label="mainmenulabel"
      className="flex flex-col lg:flex-row mx-auto px-4 pb-4 pt-8 md:px-8 lg:p-0 lg:m-0 max-w-screen-sm md:max-w-screen-md lg:max-w-full lg:grow"
    >
      <ul className="flex flex-col grow lg:flex-row lg:items-center gap-y-2 lg:gap-x-8">
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
      <div className="flex flex-col md:flex-row mt-6 lg:mt-0">
        <Button
          classes="btn--xl btn--secondary md:w-1/2 lg:w-auto"
          text="Learn more"
        />
        <Button
          classes="btn--xl btn--primary md:w-1/2 lg:w-auto mt-4 md:mt-0 md:ml-4"
          text="Try it out"
        />
      </div>
    </nav>
  );
}

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    setShowMenu(!showMenu);
  };

  return (
    <header className="sticky top-0 bg-white pt-4 w-full">
      <div className="h-[68px] mx-auto flex flex-row items-center px-4 md:px-8 lg:px-28 lg:gap-x-24 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        <div className="flex flex-col">
          <Link className="flex flex-row items-center" href="/">
            <Image
              src="/abstractly-logo.svg"
              height={32}
              width={32}
              alt="Abstractly logo"
            />
            <span className="text-neutral-900 font-bold px-1 -tracking-widest">
              Abstractly
            </span>
          </Link>
        </div>
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
        <div className="hidden lg:flex lg:grow">
          <NavMenu />
        </div>
      </div>
      <div className="w-full absolute bg-white left-0 lg:hidden">
        {showMenu && <NavMenu />}
      </div>
    </header>
  );
}
