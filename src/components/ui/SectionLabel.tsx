interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-stone ${className}`}
    >
      {children}
    </span>
  );
}
