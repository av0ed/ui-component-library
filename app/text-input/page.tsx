import type { Metadata } from "next";
import TextInput from "../_components/text-input";
import { RiMailLine, RiQuestionLine } from "@remixicon/react";

export const metadata: Metadata = {
  title: "Text Input | UI Component Library | Jason Long",
};

export default function TextInputPage() {
  return (
    <div className="flex flex-col gap-y-12 justify-start items-center my-28 h-screen">
      <TextInput
        IconRight={RiQuestionLine}
        label="Email"
        placeholder="name@email.com"
        type="email"
        hint="This is a hint text."
      />
      <TextInput
        IconRight={RiQuestionLine}
        label="Email"
        placeholder="name@email.com"
        type="email"
        hint="This is a hint text."
      />
      <TextInput
        IconRight={RiQuestionLine}
        label="Email"
        placeholder="name@email.com"
        hint="This is a hint text."
        type="email"
        isDisabled={true}
      />
      <TextInput
        IconLeft={RiMailLine}
        IconRight={RiQuestionLine}
        label="Email"
        placeholder="name@email.com"
        type="email"
        hint="This is a hint text."
        error="This is an error message."
      />
    </div>
  );
}
