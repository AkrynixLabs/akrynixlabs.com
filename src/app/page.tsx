import Layout from "@/components/layout";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Stat from "@/components/ui/Stat";
import Card from "@/components/ui/Card";
import Mini from "@/components/ui/Mini";

export default function Home() {
  return (
    <Layout>
      {/* Hero (muted surface) */}
      <Section tone="muted">
        <div className="max-w-3xl">
          <Badge>Web • Mobile • Cloud • Systems</Badge>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Technology & Systems Engineering Lab
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            Akrynix Labs designs and operates modern digital systems across web,
            mobile, cloud, and infrastructure — with a focus on long-term
            reliability and scale.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button>Book a consultation</Button>
            </Link>
            <Link href="/capabilities">
              <Button variant="secondary">Explore capabilities</Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Stat label="Delivery" value="Milestone-based" />
            <Stat label="Build" value="Product-grade" />
            <Stat label="Focus" value="Reliability" />
            <Stat label="Scale" value="Cloud-ready" />
          </div>
        </div>
      </Section>

      {/* Capabilities (light surface) */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Capabilities</h2>
          <p className="mt-3 text-neutral-600">
            We engineer systems that are easy to evolve, observe, and operate —
            not just build-and-abandon projects.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card
            title="Product-grade web platforms"
            desc="Marketing sites, dashboards, portals, and internal tools with performance, accessibility, and maintainability built in."
          />
          <Card
            title="Systems architecture"
            desc="Pragmatic system design and engineering decisions that reduce rewrite cycles and improve long-term velocity."
          />
          <Card
            title="Cloud infrastructure & DevOps"
            desc="Deployments, CI/CD, observability, and security-first practices to keep systems stable in production."
          />
          <Card
            title="Technical consulting"
            desc="Reviews, audits, and roadmaps — high-signal guidance to help teams move faster with fewer mistakes."
          />
        </div>
      </Section>

      {/* Philosophy (dark surface + dark cards) */}
      <Section tone="dark">
        <div className="max-w-3xl">
          <Badge tone="dark">Philosophy • Long-lived systems</Badge>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight">
            Our philosophy
          </h2>

          <p className="mt-4 text-neutral-300">
            We treat technology as an evolving system. Our work prioritizes
            clarity, durability, and the ability to grow without constant
            rewrites.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Mini
              tone="dark"
              title="Clarity over complexity"
              desc="Readable systems scale better than cleverness."
            />
            <Mini
              tone="dark"
              title="Operations matter"
              desc="If you can’t observe it, you can’t trust it."
            />
            <Mini
              tone="dark"
              title="Build for change"
              desc="Design for iteration, not permanence."
            />
            <Mini
              tone="dark"
              title="Quality is leverage"
              desc="A clean foundation reduces future cost."
            />
          </div>
        </div>
      </Section>

      {/* CTA (muted surface) */}
      <Section tone="muted">
        <div className="rounded-3xl border border-neutral-200 bg-white p-10 md:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Ready to build something reliable?
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Share your idea or your current system. We’ll suggest the simplest
            path to a scalable, maintainable implementation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button>Start a project</Button>
            </Link>
            <a href="mailto:hello@akrynixlabs.com">
              <Button variant="secondary">Email us</Button>
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
