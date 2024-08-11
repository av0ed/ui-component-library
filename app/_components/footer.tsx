import Button from "../_components/button";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiTwitterXLine,
} from "@remixicon/react";

const pages = [
  { id: 0, page: "Home", href: "/" },
  { id: 1, page: "Features", href: "/features-section-grid" },
  { id: 2, page: "Pricing", href: "/" },
  { id: 3, page: "About Us", href: "team-section" },
  { id: 4, page: "Contact", href: "/" },
];

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
  socialIcon: "link--md link--secondary",
  socialLink:
    "inline-flex focus:outline-none focus:rounded focus:ring focus:ring-indigo-200",
};

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center border border-t-gray-300 text-sm font-medium py-12 md:py-16 lg:py-24 px-8 lg:px-24 w-full w-screen-sm md:w-screen-md">
      <ul className="flex flex-row flex-nowrap gap-x-4 md:gap-x-6">
        {pages.map(({ id, page, href }) => (
          <li key={id}>
            <Button classes={classes.pageLink} href={href} text={page} />
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
        &copy; 2024 Abstractly, Inc. All rights reserved.
      </p>
    </footer>
  );
}
