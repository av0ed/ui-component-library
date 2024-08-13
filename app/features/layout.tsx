export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col justify-start items-center py-12 px-4 md:py-16 lg:py-24 lg:px-14">
      {children}
    </div>
  );
}
