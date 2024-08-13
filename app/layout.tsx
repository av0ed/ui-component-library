import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import "./globals.css";

const notoSans = Noto_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "UI Component Library | Jason Long",
  description: "UI Component Library built from GreatFrontEnd challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // todo: the children wrapper will have h-full w-full bg-white
  return (
    <html lang="en" className="h-full">
      <body className={`${notoSans.className} flex flex-col h-full`}>
        <Navbar />
        <main
          role="main"
          className="flex flex-col flex-nowrap flex-1 p-4 bg-gradient-haze"
        >
          <div className="">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
