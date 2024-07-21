import TestimonialCard from "../_components/testimonial-card";

export default function TestimonialCardPage() {
  return (
    <div className="flex justify-center bg-gradient-to-r from-gray-50 to-[#D2D6DB] py-[200px] h-screen">
      <TestimonialCard
        author="Sarah Dole"
        handle="@sarahdole"
        blurb="I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety
        and depth of creativity are astounding!"
        imageSrc="profile-thumbnail.png"
        imageAlt="Headshot of Sarah Dole"
      />
    </div>
  );
}
