import Link from "next/link";

type Variant = "primary" | "secondary" | "accent";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink/90",
  secondary:
    "border border-ink text-ink hover:bg-ink hover:text-paper",
  accent:
    "bg-warm text-white hover:bg-warm/90",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-300";
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
