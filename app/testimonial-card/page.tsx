import TestimonialCard from "../_components/testimonial-card";

export default function TestimonialCardPage() {
  return (
    <div className="flex justify-center">
      <TestimonialCard
        name="Sarah Dole"
        username="@sarahdole"
        testimonial="I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety
        and depth of creativity are astounding!"
        imageSrc="profile-thumbnail.png"
        imageAlt="Headshot of Sarah Dole"
      />
    </div>
  );
}
