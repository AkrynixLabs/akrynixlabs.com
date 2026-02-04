import type { Metadata } from "next";
import Layout from "@/components/layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akrynix Labs for systems engineering work, consulting, or long-term technical collaboration.",
};

export default function Contact() {
  return (
    <Layout>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700">
              Contact • Serious inquiries
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Let’s discuss your system
            </h1>

            <p className="mt-6 text-lg text-neutral-600">
              For serious inquiries, collaborations, or systems consulting, reach out.
              We typically respond within 24–48 hours.
            </p>
          </div>

          {/* Contact cards */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <ContactCard
              title="Email"
              desc="Best for project discussions and detailed requirements."
              value="akrynixlabs@gmail.com"
              href="mailto:akrynixlabs@gmail.com"
            />

            <ContactCard
              title="Discovery call"
              desc="Schedule a short call to clarify scope and constraints."
              value="Book a consultation"
              href="/contact"
            />
          </div>

          {/* Form */}
          <div className="mt-16 rounded-3xl border border-neutral-200 bg-neutral-50 p-10 md:p-14">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight">Send a message</h2>
              <p className="mt-3 text-neutral-600">
                Prefer not to email? Send your message here. We’ll reply within 24–48 hours.
              </p>

              <form
                action="https://formspree.io/f/xgoovwzo"
                method="POST"
                className="mt-8 grid gap-4"
              >
                <input type="hidden" name="_subject" value="New Akrynix Labs Inquiry" />

                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      name="name"
                      id="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                      required
                    />
                  </Field>

                  <Field label="Email" htmlFor="email">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                      required
                    />
                  </Field>
                </div>

                <Field label="Message" htmlFor="message">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell us what you’re building, your goal, timeline, constraints, and what ‘done’ looks like."
                    rows={6}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                    required
                  />
                </Field>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
                  >
                    Send message
                  </button>

                  <p className="text-sm text-neutral-600">
                    Or email:{" "}
                    <a
                      className="font-medium text-neutral-900 hover:text-neutral-700 transition"
                      href="mailto:akrynixlabs@gmail.com"
                    >
                      akrynixlabs@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* What to include */}
          <div className="mt-16 rounded-3xl border border-neutral-200 bg-white p-10 md:p-14">
            <h2 className="text-2xl font-semibold tracking-tight">What to include</h2>
            <p className="mt-3 max-w-2xl text-neutral-600">
              To help us respond faster, include the goal, constraints, timeline, and what “done” looks like.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <Item>What you’re building (or what exists today)</Item>
              <Item>Primary goal + success metric</Item>
              <Item>Constraints (budget, timeline, tech stack, compliance)</Item>
              <Item>Expected users / scale</Item>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:akrynixlabs@gmail.com?subject=Akrynix%20Labs%20Inquiry"
                className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
              >
                Email Akrynix Labs
              </a>

              <Link
                href="/capabilities"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50 transition"
              >
                View capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ContactCard({
  title,
  desc,
  value,
  href,
}: {
  title: string;
  desc: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="rounded-2xl border border-neutral-200 bg-white p-6 hover:bg-neutral-50 transition"
    >
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
      <p className="mt-4 text-sm font-medium text-neutral-900">{value} →</p>
    </a>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="block">
      <label htmlFor={htmlFor} className="text-sm font-medium text-neutral-900">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-neutral-400" />
      <span>{children}</span>
    </li>
  );
}
