import Layout from "@/components/layout";
import { title } from "process";

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold tracking-tight">
        Contact
      </h1>

      <p className="mt-6 max-w-3xl text-neutral-600">
        For serious inquiries, collaborations, or systems consulting,
        reach out at:
      </p>

      <p className="mt-4 text-neutral-800">
        contact@akrynixlabs.com
      </p>
    </Layout>
  );
}

export const metadata = {
    title: "Contact",
    description: "Get in touch with Akrynix Labs for serious engineering\
     work, systems consulting, or long-term technical collaboration.",
}