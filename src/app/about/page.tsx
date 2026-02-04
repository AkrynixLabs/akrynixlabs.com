import type { Metadata } from "next";
import Layout from "@/components/layout";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Mini from "@/components/ui/Mini";

export const metadata: Metadata = {
  title: "About",
  description:
    "Akrynix Labs is a technology and systems engineering lab focused on building reliable, scalable, long-lived digital systems.",
};

const principles = [
  {
    title: "Systems thinking",
    desc: "We design software as an evolving system: boundaries, behavior, and operations over time.",
  },
  {
    title: "Clarity over cleverness",
    desc: "Maintainability is a feature. Readable systems scale better than complexity.",
  },
  {
    title: "Reliability is engineered",
    desc: "Performance, observability, and operational readiness are part of the build—not after.",
  },
  {
    title: "Build for change",
    desc: "We expect iteration and choose structures that grow without constant rewrites.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Header (muted) */}
      <Section tone="muted">
        <div className="max-w-3xl">
          <Badge>About • Akrynix Labs</Badge>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            A lab for building long-lived digital systems
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            Akrynix Labs operates as a systems partner—designing, building, and improving
            digital systems across web, mobile, and cloud. We prioritize reliability, maintainability,
            and engineering outcomes that hold up over time.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/capabilities">
              <Button>Explore capabilities</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">Contact Akrynix Labs</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Principles (light) */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Principles</h2>
          <p className="mt-3 text-neutral-600">
            Simple, durable engineering practices that reduce risk and increase long-term velocity.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.title} title={p.title} desc={p.desc} />
          ))}
        </div>
      </Section>

      {/* What we optimize for (dark) */}
      <Section tone="dark">
        <div className="max-w-3xl">
          <Badge tone="dark">Outcomes • Engineering quality</Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight">What we optimize for</h2>
          <p className="mt-3 text-neutral-300">
            We build and improve systems with production reality in mind.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Mini tone="dark" title="Maintainability" desc="Clean boundaries, readable code, and docs that prevent future confusion." />
            <Mini tone="dark" title="Scalability" desc="Foundations that support growth in users, data, and features without rewrites." />
            <Mini tone="dark" title="Reliability" desc="Monitoring, performance, and incident readiness as first-class requirements." />
            <Mini tone="dark" title="Delivery velocity" desc="Pragmatic decisions that keep teams shipping without accumulating chaos." />
          </div>
        </div>
      </Section>

      {/* CTA (light) */}
      <Section>
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-10 md:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Let’s work as systems partners
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Whether you’re building new or stabilizing an existing system, we can help you plan, execute, and ship
            with production-grade discipline.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button>Start a conversation</Button>
            </Link>
            <Link href="/approach">
              <Button variant="secondary">See our approach</Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
