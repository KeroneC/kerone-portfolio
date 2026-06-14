export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground sm:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-3xl flex-col justify-center gap-6">
        <p className="text-sm font-medium text-neutral-500">Kerone Creary</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Building What Matters
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600">
          Software Developer focused on .NET, SQL, and full-stack applications.
        </p>
        <p className="max-w-2xl text-sm text-neutral-500">
          Phase 0 is intentionally small: project initialization, local quality
          checks, GitHub Actions, and a Vercel-ready workflow.
        </p>
      </section>
    </main>
  );
}
