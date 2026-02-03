import Link from "next/link";

export default function Navigation() {
    return (
        <header className="w-full border-b border-neutral-200">
            <nav className="max-w-6xl mx-auto px-6 py4 flex items-center justify-between">
                <Link href="/" className="text-sm font-semibold tracking-tight">
                    Akrynix Labs
                </Link>

                <div className="flex gap-6 text-sm text-neutral-600">
                    <Link href="/about" className="hover:text-neutral-900">
                        About
                    </Link>
                    <Link href="/capabilities" className="hover:text-neutral-900">
                        Capabilities
                    </Link>
                    <Link href="/approach" className="hover:text-neutral-900">
                        Approach
                    </Link>
                    <Link href="/contact" className="hover:text-neutral-900">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}