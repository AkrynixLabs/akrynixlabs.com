import { cn } from "@/lib/cn";

export default function Badge({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm",
        tone === "dark"
          ? "border-neutral-800 bg-neutral-900/50 text-neutral-200"
          : "border-neutral-200 bg-neutral-50 text-neutral-700",
        className
      )}
    >
      {children}
    </span>
  );
}
