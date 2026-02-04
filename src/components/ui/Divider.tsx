import { cn } from "@/lib/cn";

export default function Divider({ className }: { className?: string }) {
  return <div className={cn("border-t border-neutral-200", className)} />;
}
