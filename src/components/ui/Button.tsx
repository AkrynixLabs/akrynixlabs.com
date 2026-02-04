import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  children,
  className,
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants: Record<Variant, string> = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:outline-neutral-900",
    secondary:
      "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline-neutral-900",
    ghost:
      "text-neutral-900 hover:bg-neutral-100 focus-visible:outline-neutral-900",
  };

  return <span className={cn(base, variants[variant], className)}>{children}</span>;
}
