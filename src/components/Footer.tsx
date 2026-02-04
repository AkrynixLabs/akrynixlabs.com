import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold tracking-tight text-neutral-900">
              Akrynix Labs
            </p>
            <p className="mt-2 max-w-md text-sm text-neutral-600">
              A technology and systems engineering lab building reliable, scalable, long-lived digital systems.
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              <a className="hover:text-neutral-900 transition" href="mailto:akrynixlabs@gmail.com">
                akrynixlabs@gmail.com
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Company
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-600">
              <Link className="hover:text-neutral-900 transition" href="/about">
                About
              </Link>
              <Link className="hover:text-neutral-900 transition" href="/approach">
                Approach
              </Link>
              <Link className="hover:text-neutral-900 transition" href="/capabilities">
                Capabilities
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-600">
              <Link className="hover:text-neutral-900 transition" href="/contact">
                Contact
              </Link>
              <a className="hover:text-neutral-900 transition" href="mailto:akrynixlabs@gmail.com">
                Email
              </a>
              {/* Replace later with real links */}
              <a className="hover:text-neutral-900 transition" href="#">
                LinkedIn
              </a>
              <a className="hover:text-neutral-900 transition" href="#">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Akrynix Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
