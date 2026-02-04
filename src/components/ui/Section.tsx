import { cn } from "@/lib/cn";
import Container from "./Container";

type Tone = "light" | "muted" | "dark";

const toneClasses: Record<Tone, string> = {
  light: "bg-white text-neutral-900",
  muted: "bg-neutral-50 text-neutral-900",
  dark:
    "bg-neutral-950 text-white border-y border-neutral-900/60",
};

export default function Section({
  children,
  className,
  tone = "light",
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-24", toneClasses[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
