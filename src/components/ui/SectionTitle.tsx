interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
}: SectionTitleProps) {
  return (
    <Tag
      className={`font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </Tag>
  );
}
