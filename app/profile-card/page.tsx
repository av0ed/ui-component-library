import type { Metadata } from "next";
import ProfileCard from "../_components/profile-card";

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
      />
    </div>
  );
}
