import { cn } from "@/lib/cn";

export default function Stat({
  label,
  value,
  tone = "light",
}: {
  label: string;
  value: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-4",
        tone === "dark"
          ? "border-neutral-800 bg-neutral-900/40"
          : "border-neutral-200 bg-neutral-50"
      )}
    >
      <p className={cn("font-semibold", tone === "dark" ? "text-white" : "text-neutral-900")}>
        {value}
      </p>
      <p className={cn("mt-1 text-sm", tone === "dark" ? "text-neutral-300" : "text-neutral-600")}>
        {label}
      </p>
    </div>
  );
}
