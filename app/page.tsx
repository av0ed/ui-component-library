import Link from "next/link";
import { makeLink } from "./_utilities/helpers";

export default function Home() {
  const pages = [
    "404 Section",
    "Badge",
    "Button",
    "Blog Card",
    "Icon Button",
    "Profile Card",
    "Team Section",
    "Testimonial Card",
    "Text Input",
  ];
  return (
    <ul className="flex flex-col flex-nowrap">
      {pages.map((page) => (
        <li key={page}>
          <Link href={makeLink(page)}>{page}</Link>
        </li>
      ))}
    </ul>
  );
}
