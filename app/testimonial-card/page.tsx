export default function TestimonialCard({}) {
  return (
    <div className="max-w-[340px] max-h-[233px] w-full h-full p-8 bg-white flex flex-col rounded-lg shadow-neutral-600">
      <div className="flex flex-row">
        <img
          className="w-12 h-12"
          src="profile-thumbnail.png"
          alt="Headshot of Sarah Dole"
        />
        <div className="flex flex-col">
          <p className="text-neutral-900">Sarah Dole</p>
          <p className="text-neutral-600">@sarahdole</p>
        </div>
      </div>
      <p className="text-neutral-600">
        I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety and
        depth of creativity are astounding!
      </p>
    </div>
  );
}
