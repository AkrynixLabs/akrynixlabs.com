"use client";

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
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Badge>Web • Mobile • Cloud • AI • Systems</Badge>
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 text-neutral-900">
            Technology & Systems Engineering Lab
          </h1>

          <p className="mt-8 text-xl text-neutral-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Akrynix Labs is a technology and systems engineering lab focused on designing, building, and operating modern digital systems across web platforms, mobile systems, cloud infrastructure, AI integration, and long-term operations — with a focus on systems-first thinking and architectural clarity.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Link href="/contact">
              <Button>Book a consultation</Button>
            </Link>
            <Link href="/capabilities">
              <Button variant="secondary">Explore capabilities</Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <div className="group hover:scale-110 hover:bg-neutral-100 transition-all duration-300 cursor-pointer rounded-lg p-2">
              <Stat label="Approach" value="Systems-first" />
            </div>
            <div className="group hover:scale-110 hover:bg-neutral-100 transition-all duration-300 cursor-pointer rounded-lg p-2">
              <Stat label="Design" value="Long-term" />
            </div>
            <div className="group hover:scale-110 hover:bg-neutral-100 transition-all duration-300 cursor-pointer rounded-lg p-2">
              <Stat label="Focus" value="Architecture" />
            </div>
            <div className="group hover:scale-110 hover:bg-neutral-100 transition-all duration-300 cursor-pointer rounded-lg p-2">
              <Stat label="Scale" value="By design" />
            </div>
          </div>
        </div>
      </Section>

      {/* Capabilities (light surface) */}
      <Section>
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Capabilities</h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            We engineer systems that are easy to evolve, observe, and operate —
            not just build-and-abandon projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 hover:scale-105 hover:-translate-y-2 hover:bg-neutral-100 transition-all duration-300 cursor-pointer rounded-xl">
            <Card
              title="Product-grade web platforms"
              desc="Marketing sites, dashboards, portals, and internal tools with performance, accessibility, and maintainability built in."
            />
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 hover:scale-105 hover:-translate-y-2 hover:bg-neutral-100 transition-all duration-300 cursor-pointer rounded-xl">
            <Card
              title="Systems architecture"
              desc="Pragmatic system design and engineering decisions that reduce rewrite cycles and improve long-term velocity."
            />
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-450 hover:scale-105 hover:-translate-y-2 hover:bg-neutral-100 transition-all duration-300 cursor-pointer rounded-xl">
            <Card
              title="Cloud infrastructure & DevOps"
              desc="Deployments, CI/CD, observability, and security-first practices to keep systems stable in production."
            />
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600 hover:scale-105 hover:-translate-y-2 hover:bg-neutral-100 transition-all duration-300 cursor-pointer rounded-xl">
            <Card
              title="AI integration"
              desc="Intelligent systems, machine learning pipelines, and AI-powered features built with scalability and reliability."
            />
          </div>
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
              desc="If you can't observe it, you can't trust it."
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
        <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 p-10 md:p-14 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:shadow-2xl hover:bg-neutral-200 transition-all duration-300">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Ready to build something reliable?
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Share your idea or your current system. We'll suggest the simplest
            path to a scalable, maintainable implementation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button>Start a project</Button>
            </Link>
            <a href="mailto:akrynixlabs@gmail.com">
              <Button variant="secondary">Email us</Button>
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
