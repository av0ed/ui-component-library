import type { Metadata } from "next";
import TextArea from "../_components/text-area";

export const metadata: Metadata = {
  title: "Text Area | UI Component Library | Jason Long",
};

export default function TextAreaPage() {
  return (
    <div className="flex flex-col gap-y-12 justify-start items-center my-28 px-4">
      <TextArea label="Comment" placeholder="Write your comment here..." />
    </div>
  );
}
