import { cn } from "@/lib/cn";

export default function Card({
  title,
  desc,
  children,
  tone = "light",
  className,
}: {
  title?: string;
  desc?: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const base =
    "rounded-2xl border p-6 transition";

  const toneClass =
    tone === "dark"
      ? "border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60"
      : "border-neutral-200 bg-white hover:bg-neutral-50";

  return (
    <div className={cn(base, toneClass, className)}>
      {title && <h3 className="text-lg font-semibold tracking-tight">{title}</h3>}
      {desc && (
        <p className={cn("mt-2 text-sm leading-relaxed", tone === "dark" ? "text-neutral-300" : "text-neutral-600")}>
          {desc}
        </p>
      )}
      {children}
    </div>
  );
}
