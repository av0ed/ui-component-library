import Link from "next/link";

export default function Home() {
  const makeLink = (title: string) => {
    return title.toLowerCase().replace(" ", "-");
  };
  const pages = [
    "404 Section",
    "Badge",
    "Button",
    "Blog Card",
    "Profile Card",
    "Testimonial Card",
    "Text Input",
  ];
  return (
    <main>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Link href={makeLink(page)}>{page}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
