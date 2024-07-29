import type { Metadata } from "next";
import ProfileCard from "../_components/profile-card";
import ButtonSocial from "../_components/button-social";
import {
  RiTwitterXFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";

export const metadata: Metadata = {
  title: "Profile Card | UI Component Library | Jason Long",
};
export default function ProfileCardPage() {
  return (
    <div className="flex justify-center mt-[200px]">
      <ProfileCard
        name="Sarah Dole"
        role="Front End Engineer @ Microsoft"
        blurb="I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer."
        imageSrc="profile-thumbnail.png"
        imageAlt="Headshot of Sarah Dole"
      >
        <div className="flex flex-row justify-center gap-x-4">
          <ButtonSocial
            Icon={RiGithubFill}
            ariaLabel="Follow Sarah Dole on Github"
          />
          <ButtonSocial
            Icon={RiLinkedinBoxFill}
            ariaLabel="Follow Sarah Dole on LinkedIn"
          />
          <ButtonSocial
            Icon={RiInstagramFill}
            ariaLabel="Follow Sarah Dole on Instagram"
          />
          <ButtonSocial
            Icon={RiTwitterXFill}
            ariaLabel="Follow Sarah Dole on X"
          />
        </div>
      </ProfileCard>
    </div>
  );
}
