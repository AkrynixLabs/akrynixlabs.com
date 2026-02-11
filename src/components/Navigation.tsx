"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
        className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
          <div className="relative h-20 w-80 sm:h-24 sm:w-96 md:h-28 md:w-[28rem]">
            <Image
              src="/assets/logo-2.png"
              alt="Akrynix Labs logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-2 py-1 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200 hover:scale-105"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-all duration-200 hover:scale-105 hover:shadow-lg whitespace-nowrap md:inline-flex"
          >
            Start a project
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-all duration-200 hover:scale-110"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path className="animate-in" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path className="animate-in" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white animate-in slide-in-from-top duration-300">
          <div className="px-6 py-4 space-y-3">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-lg px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-all duration-200 hover:scale-105 hover:shadow-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
