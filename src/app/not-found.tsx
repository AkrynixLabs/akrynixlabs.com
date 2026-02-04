import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="rounded-3xl border border-neutral-200 bg-white p-10 md:p-14">
          <p className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700">
            404 • Not Found
          </p>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Page not found
          </h1>

          <p className="mt-3 text-neutral-600">
            The page you’re looking for doesn’t exist, or the link may have changed.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
            >
              Back home
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition"
            >
              Contact support
            </Link>
          </div>

          <div className="mt-10 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
            Try checking the URL, or use the navigation to find what you need.
          </div>
        </div>
      </div>
    </div>
  );
}
