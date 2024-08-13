export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full mx-auto flex flex-col justify-start items-center max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg py-12 px-4 md:py-16 lg:py-24 lg:px-14">
      {children}
    </div>
  );
}
