import { cn } from "@/lib/cn";

export default function BulletList({
  items,
  tone = "light",
  className,
}: {
  items: string[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul className={cn("mt-4 space-y-2 text-sm", className, tone === "dark" ? "text-neutral-200" : "text-neutral-700")}>
      {items.map((b) => (
        <li key={b} className="flex gap-2">
          <span className={cn("mt-2 h-1.5 w-1.5 flex-none rounded-full", tone === "dark" ? "bg-neutral-500" : "bg-neutral-400")} />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}
