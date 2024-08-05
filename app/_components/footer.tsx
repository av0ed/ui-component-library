import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiTwitterXLine,
} from "@remixicon/react";
import { makeLink } from "../_utilities/helpers";

const pages = ["Features", "Pricing", "About Us", "Contact"];

const socialLinks = [
  { id: 0, Icon: RiYoutubeLine, href: "/" },
  { id: 1, Icon: RiInstagramLine, href: "/" },
  { id: 2, Icon: RiFacebookBoxLine, href: "/" },
  { id: 3, Icon: RiGithubLine, href: "/" },
  { id: 4, Icon: RiTwitterXLine, href: "/" },
];

const classes = {
  pageLink:
    "text-neutral-600 hover:text-neutral-900 focus:outline-none focus:rounded focus:ring focus:ring-indigo-200",
  socialIcon: "text-neutral-400 h-6 w-6",
  socialLink:
    "inline-flex focus:outline-none focus:rounded focus:ring focus:ring-indigo-200",
};

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-sm font-medium py-12 md:py-16 lg:py-24 px-8 lg:px-24 w-full w-screen-sm md:w-screen-md">
      <ul className="flex flex-row flex-nowrap gap-x-4">
        {pages.map((page) => (
          <li key={page}>
            <Link className={classes.pageLink} href={makeLink(page)}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-row flex-nowrap mt-8 gap-x-6">
        {socialLinks.map(({ id, Icon, href }) => (
          <li key={id}>
            <a href={href} className={classes.socialLink}>
              <Icon className={classes.socialIcon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-neutral-900 font-normal">
        2024 Abstractly, Inc. All rights reserved.
      </p>
    </footer>
  );
}
