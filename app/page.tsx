import Link from "next/link";
import Footer from "./_components/footer";
import { makeLink } from "./_utilities/helpers";

export default function Home() {
  const pages = [
    "404 Section",
    "Badge",
    "Button",
    "Blog Card",
    "Footer",
    "Profile Card",
    "Testimonial Card",
    "Text Input",
  ];
  return (
    <main className="h-screen flex flex-col flex-nowrap">
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Link href={makeLink(page)}>{page}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
