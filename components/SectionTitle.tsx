interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-black text-white md:text-4xl">
        {title}
      </h2>

      <p className="mt-3 text-gray-400">
        {subtitle}
      </p>

      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-lime-400" />
    </div>
  );
}