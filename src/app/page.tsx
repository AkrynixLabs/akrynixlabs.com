import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Technology & Systems Engineering Lab
        </h1>

        <p className="mt-6 text-lg text-neutral-600">
          Akrynix Labs designs and operates modern digital systems.
          We work across web, mobile, cloud, and infrastructure with
          a focus on long-term reliability and scale.
        </p>
      </section>

      {/* Capabilities */}
      <section className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Capabilities
        </h2>

        <ul className="mt-8 grid gap-4 text-neutral-700">
          <li>Product-grade web platforms and applications</li>
          <li>Cross-platform mobile systems</li>
          <li>Systems engineering and architecture</li>
          <li>Cloud infrastructure and DevOps</li>
          <li>Operational systems and technical consulting</li>
        </ul>
      </section>

      {/* Philosophy */}
      <section className="mt-24 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">
          Our Philosophy
        </h2>

        <p className="mt-6 text-neutral-600">
            We treat technology as an evolving system.
            Our work prioritizes clarity, durability, and the ability
            to grow without constant rewrites.
        </p>
      </section>
    </Layout>
  );
}
