import type { Metadata } from "next";
import Footer from "../_components/footer";

export const metadata: Metadata = {
  title: "Footer | UI Component Library | Jason Long",
};
export default function BlogCardPage() {
  return (
    <div className="p-4 bg-neutral-600 h-screen bg-gradient-haze">
      <div className="flex items-center justify-center h-full bg-white">
        <Footer />
      </div>
    </div>
  );
}
