import Layout from "@/components/layout";
import { title } from "process";

export default function Approach() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold tracking-tight">
        Our Approach
      </h1>

      <p className="mt-6 max-w-3xl text-neutral-600">
        We lead with architecture, prioritize reliability, and design
        systems that can evolve without constant rewrites.
      </p>
    </Layout>
  );
}

export const  metadata = {
    title: "Approach",
    description: "Our engineering approach emphasizes architecture,\
     reliability, and systems that scale without unnecessary complexity.",
}