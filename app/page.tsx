import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/testimonial-card">Testimonial Card</Link>
        </li>
        <li>
          <Link href="/blog-card">Blog Card</Link>
        </li>
      </ul>
    </main>
  );
}
