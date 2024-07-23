import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
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
    <html lang="en">
      <body
        className={`${notoSans.className} mx-4 h-screen bg-gradient-to-r from-gray-50 from-0% to-[#D2D6DB] to-100% mt-[200px]`}
      >
        {children}
      </body>
    </html>
  );
}
