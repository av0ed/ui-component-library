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
  return (
    <html lang="en" className="h-full">
      <body className={`${notoSans.className} flex flex-col h-full bg-white`}>
        <Navbar />
        <main role="main" className="flex flex-col flex-nowrap flex-1">
          <div className="h-full p-4 bg-gradient-haze">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
