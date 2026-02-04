import type { Metadata } from "next";
import Layout from "@/components/layout";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Akrynix Labs leads with architecture and operational thinking, building systems that scale without unnecessary complexity.",
};

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "Clarify goals, constraints, risk, and success metrics. Prefer the simplest system that matches the real need.",
  },
  {
    n: "02",
    title: "Architecture",
    desc: "Define boundaries, data flow, and key decisions early—so execution stays clean and consistent.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Implement with code quality discipline, incremental delivery, and checks for performance and maintainability.",
  },
  {
    n: "04",
    title: "Operate",
    desc: "Plan for production: monitoring, logging, incident readiness, and post-launch iteration based on signal.",
  },
];

const practices = [
  { title: "Milestone-based delivery", desc: "Progress is visible, measurable, and easy to track." },
  { title: "Documentation that helps", desc: "Decisions, runbooks, and notes that reduce future confusion." },
  { title: "Security-first defaults", desc: "Least privilege, safe deployment practices, and responsible data handling." },
  { title: "Performance awareness", desc: "Speed, accessibility, and UX are treated as engineering outcomes." },
];

export const dynamic = "force-static";

export default function Approach() {
  return (
    <Layout>
      {/* Header (muted) */}
      <Section tone="muted">
        <div className="max-w-3xl">
          <Badge>Approach • Engineering discipline</Badge>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            How we build reliable systems
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            We lead with architecture, prioritize reliability, and design systems that evolve without constant rewrites.
            Our approach is calm, measurable, and production-first.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button>Discuss a system</Button>
            </Link>
            <Link href="/capabilities">
              <Button variant="secondary">Explore capabilities</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Steps (light) */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Process</h2>
          <p className="mt-3 text-neutral-600">
            A simple, repeatable workflow used by strong engineering teams.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <Card key={s.n} title={`${s.n} — ${s.title}`} desc={s.desc} />
          ))}
        </div>
      </Section>

      {/* Practices (dark) */}
      <Section tone="dark">
        <div className="max-w-3xl">
          <Badge tone="dark">Practices • Production readiness</Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight">Practices we apply</h2>
          <p className="mt-3 text-neutral-300">
            These practices reduce risk while keeping delivery fast and maintainable.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {practices.map((p) => (
            <Card key={p.title} tone="dark" title={p.title} desc={p.desc} />
          ))}
        </div>
      </Section>

      {/* CTA (light) */}
      <Section>
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-10 md:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Want a system review?
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            We can review architecture, code quality, deployments, and reliability risks—and provide a clear improvement plan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button>Request a review</Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary">Learn about Akrynix</Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
