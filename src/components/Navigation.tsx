import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  return (
    <header 
        className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
            A
          </span>
          <span className="text-sm font-semibold tracking-tight text-neutral-900">
            Akrynix Labs
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-2 py-1 hover:text-neutral-900 hover:bg-neutral-100 transition"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition md:inline-flex"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
          >
            Start a project
          </Link>
        </div>
      </nav>
    </header>
  );
}
