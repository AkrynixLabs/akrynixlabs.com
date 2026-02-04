import type { Metadata } from "next";
import Layout from "@/components/layout";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Stat from "@/components/ui/Stat";
import Card from "@/components/ui/Card";
import Mini from "@/components/ui/Mini";
import BulletList from "@/components/ui/BulletList";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Explore Akrynix Labs’ engineering capabilities across web platforms, mobile systems, cloud infrastructure, DevOps, and systems architecture.",
};

const capabilityAreas = [
  {
    title: "Web Platforms",
    desc:
      "Product-grade web systems: marketing sites, dashboards, portals, internal tools, and APIs built for performance and long-term maintainability.",
    bullets: [
      "Next.js / React architecture and component systems",
      "Performance, accessibility, and SEO best practices",
      "Internal tools, admin panels, and data-driven UIs",
      "API integration and secure auth patterns",
    ],
    tag: "Web",
  },
  {
    title: "Systems Architecture",
    desc:
      "Clear boundaries, pragmatic patterns, and scalable foundations that reduce rewrite cycles and improve long-term velocity.",
    bullets: [
      "System design: services, data flows, boundaries",
      "Architecture reviews and refactor planning",
      "Scalability + reliability tradeoffs made explicit",
      "Documentation and decision records (ADR-style)",
    ],
    tag: "Architecture",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    desc:
      "Reliable deployments and operable systems: CI/CD, observability, secure infrastructure, and production readiness.",
    bullets: [
      "CI/CD pipelines and deployment automation",
      "Infrastructure foundations (cloud hosting, networking)",
      "Monitoring, logging, and alerting setup",
      "Security-first practices (least privilege, secrets)",
    ],
    tag: "Cloud",
  },
  {
    title: "Mobile Systems",
    desc:
      "Cross-platform mobile experiences designed for usability and clean integration with your backend systems.",
    bullets: [
      "Cross-platform strategy and architecture guidance",
      "API-first mobile integration patterns",
      "Performance, offline-first considerations",
      "Release readiness and QA discipline",
    ],
    tag: "Mobile",
  },
  {
    title: "Operational Systems",
    desc:
      "Systems that run smoothly in production: reliability practices, incident readiness, and continuous improvement loops.",
    bullets: [
      "Production readiness and risk assessments",
      "Runbooks, playbooks, and operational docs",
      "Post-launch iteration plan based on metrics",
      "Stability improvements without slowing delivery",
    ],
    tag: "Ops",
  },
  {
    title: "Technical Consulting",
    desc:
      "High-signal guidance to help teams move faster with fewer mistakes—architecture, code quality, and delivery strategy.",
    bullets: [
      "Engineering roadmap and implementation planning",
      "Codebase review + improvement plan",
      "Security and compliance alignment support",
      "Team process improvements (pragmatic, not heavy)",
    ],
    tag: "Advisory",
  },
];

const engagementModels = [
  {
    title: "System Review",
    desc:
      "A focused assessment of architecture, code quality, deployment, and reliability—plus a clear improvement plan.",
    bullets: ["1–2 weeks", "Findings + recommendations", "Priority roadmap"],
  },
  {
    title: "Build Partnership",
    desc:
      "We design and implement a system with you: milestones, quality checks, and production readiness from day one.",
    bullets: ["Milestone-based delivery", "Weekly updates", "Production-grade handoff"],
  },
  {
    title: "Retainer",
    desc:
      "Ongoing engineering support: reliability improvements, new features, operational maturity, and faster iteration.",
    bullets: ["Monthly capacity", "Engineering + advisory", "Continuous improvement"],
  },
];

export default function Capabilities() {
  return (
    <Layout>
      {/* Header (muted surface) */}
      <Section tone="muted">
        <div className="max-w-3xl">
          <Badge>Capabilities • Systems Partner</Badge>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Engineering capabilities for reliable, scalable systems
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            Akrynix Labs operates as a systems partner—designing, building, and
            improving digital systems that stay maintainable as they grow.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button>Discuss a system</Button>
            </Link>
            <Link href="/approach">
              <Button variant="secondary">See our approach</Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat label="Delivery" value="Milestone-based" />
          <Stat label="Build" value="Product-grade" />
          <Stat label="Focus" value="Reliability" />
          <Stat label="Scale" value="Cloud-ready" />
        </div>
      </Section>

      {/* Capability areas (light surface) */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Capability areas</h2>
          <p className="mt-3 text-neutral-600">
            We combine engineering execution with operational thinking—so the system
            works in production, not just in development.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {capabilityAreas.map((c) => (
            <Card key={c.title} title={c.title} desc={c.desc}>
              <div className="mt-4">
                <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
                  {c.tag}
                </span>
                <BulletList items={c.bullets} />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Engagement models (dark surface) */}
      <Section tone="dark">
        <div className="max-w-3xl">
          <Badge tone="dark">Engagement • Delivery models</Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight">Engagement models</h2>
          <p className="mt-3 text-neutral-300">
            Choose the model that matches your stage: validate, build, or improve.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {engagementModels.map((e) => (
            <Card key={e.title} tone="dark" title={e.title} desc={e.desc}>
              <BulletList items={e.bullets} tone="dark" />
            </Card>
          ))}
        </div>
      </Section>

      {/* What you can expect (muted surface) */}
      <Section tone="muted">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">What you can expect</h2>
          <p className="mt-3 text-neutral-600">
            We keep things calm, measurable, and maintainable—like strong engineering teams do.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Mini title="Clear scope & milestones" desc="We define what done means and ship in measurable increments." />
            <Mini title="Documentation that helps" desc="Notes, decisions, and runbooks that reduce future confusion." />
            <Mini title="Production readiness" desc="Performance, reliability, and security are treated as core requirements." />
            <Mini title="Pragmatic communication" desc="Weekly updates, visible progress, and no unnecessary complexity." />
          </div>
        </div>
      </Section>

      {/* CTA (light surface) */}
      <Section>
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-10 md:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Want us to review or build your system?
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Share the goal and constraints. We’ll propose a simple, scalable approach and a clear delivery plan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button>Contact Akrynix Labs</Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary">Learn more</Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
