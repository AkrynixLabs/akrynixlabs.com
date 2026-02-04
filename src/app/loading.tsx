export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="rounded-3xl border border-neutral-200 bg-white p-10 md:p-14">
          {/* Badge */}
          <div className="h-6 w-32 animate-pulse rounded-full bg-neutral-200" />

          {/* Title */}
          <div className="mt-6 h-8 w-3/4 animate-pulse rounded bg-neutral-200" />

          {/* Text lines */}
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200" />
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            <div className="h-10 w-32 animate-pulse rounded-xl bg-neutral-200" />
            <div className="h-10 w-40 animate-pulse rounded-xl bg-neutral-200" />
          </div>

          {/* Divider */}
          <div className="mt-10 h-px w-full bg-neutral-200" />

          {/* Footer text */}
          <div className="mt-6 h-3 w-2/3 animate-pulse rounded bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}
