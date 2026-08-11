// Minimal, understated loading state for project detail pages. These pages are
// statically generated, so this only appears briefly on slow navigations.
export default function Loading() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-5 pt-28 pb-16 sm:px-8">
        <div className="h-4 w-28 animate-pulse rounded bg-card" />
        <div className="mt-6 h-10 w-3/4 animate-pulse rounded bg-card" />
        <div className="mt-4 h-10 w-1/2 animate-pulse rounded bg-card" />
        <div className="mt-8 flex gap-2">
          <div className="h-7 w-20 animate-pulse rounded-full bg-card" />
          <div className="h-7 w-20 animate-pulse rounded-full bg-card" />
          <div className="h-7 w-20 animate-pulse rounded-full bg-card" />
        </div>
        <div className="mt-12 space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-card" />
          <div className="h-4 w-full animate-pulse rounded bg-card" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-card" />
        </div>
      </div>
    </main>
  );
}
