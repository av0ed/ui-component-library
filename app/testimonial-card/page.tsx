import TestimonialCard from "../_components/testimonial-card";

export default function TestimonialCardPage() {
  return (
    <div className="grid gap-4 bg-gradient-to-r from-gray-50 to-[#D2D6DB] h-screen">
      <TestimonialCard
        author="Sarah Dole"
        handle="@sarahdole"
        blurb="I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety
        and depth of creativity are astounding!"
        imageSrc="profile-thumbnail.png"
        imageAlt="Headshot of Sarah Dole"
      />
      <TestimonialCard
        author="Sarah Dole"
        handle="@sarahdole"
        blurb="A very small stage in a vast cosmic arena concept of the number
        one birth globular star cluster light years white dwarf. Shores of the
        cosmic ocean bits of moving fluff stirred by starlight paroxysm of
        global death shores of the cosmic ocean are creatures of the cosmos.
        Muse about a still more glorious dawn awaits the only home we've ever
        known two ghostly white figures in coveralls and helmets are softly
        dancing invent the universe dream of the mind's eye and billions upon
        billions upon billions upon billions upon billions upon billions upon
        billions."
        imageSrc="profile-thumbnail.png"
        imageAlt="Headshot of Sarah Dole"
      />
    </div>
  );
}
