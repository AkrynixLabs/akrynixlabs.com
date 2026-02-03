import Layout from "@/components/layout";
import { title } from "process";

export default function Capabilities() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold tracking-tight">
        Capabilities
      </h1>

      <p className="mt-6 max-w-3xl text-neutral-600">
        Our work spans the full lifecycle of digital systems — from
        architecture and implementation to deployment and operations.
      </p>
    </Layout>
  );
}

export const metadata = {
  title: "Capabilities",
  description: "Explore Akrynix Labs’ engineering capabilities across\
   web platforms, mobile systems, cloud infrastructure, and DevOps.",
}