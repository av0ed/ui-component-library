import type { Metadata } from "next";
import ProfileCard from "../_components/profile-card";
import Button from "../_components/button";
import {
  RiTwitterXFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";

// TODO: must fix buttons.
export const metadata: Metadata = {
  title: "Profile Card | UI Component Library | Jason Long",
};

export default function ProfileCardPage() {
  return (
    <div className="flex justify-center items-start pt-[200px] h-screen bg-gradient-haze">
      <ProfileCard
        name="Sarah Dole"
        role="Front End Engineer @ Microsoft"
        blurb="I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer."
        imageSrc="profile-thumbnail.png"
        imageAlt="Headshot of Sarah Dole"
      >
        <div className="flex flex-row justify-center gap-x-4"></div>
      </ProfileCard>
    </div>
  );
}
