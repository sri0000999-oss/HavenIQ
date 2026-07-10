import Link from "next/link";

interface AnalysisPageProps {
  searchParams: Promise<{ address?: string }>;
}

export default async function AnalysisPage({ searchParams }: AnalysisPageProps) {
  const { address } = await searchParams;
  const displayAddress = address || "N/A";

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans antialiased selection:bg-zinc-800 selection:text-white">
      {/* Header */}
      <header className="border-b border-zinc-900 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-tr from-zinc-400 to-white shadow-sm" />
            <span className="text-xl font-bold tracking-tight text-white">Haven<span className="text-zinc-400">IQ</span></span>
          </Link>
          <div>
            <Link href="/" className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all hover:bg-zinc-800">
              ← New Analysis
            </Link>
          </div>
        </div>
      </header>

      {/* Analysis Output Section */}
      <main className="relative isolate overflow-hidden pt-16 pb-24 sm:pb-32">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_50%)]" />

        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Report Dashboard</span>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Property Analysis
            </h1>
            <p className="mt-3 text-base text-zinc-400 break-words bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3 mt-4">
              <span className="text-xs block font-medium uppercase tracking-wider text-zinc-600 mb-1">Address</span>
              {displayAddress}
            </p>
          </div>

          {/* Metric Dashboard Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Score Card */}
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-medium text-zinc-500">Overall Score</h3>
                <p className="mt-4 text-5xl font-extrabold text-white tracking-tight">87<span className="text-xl font-normal text-zinc-500"> / 100</span></p>
              </div>
              <div className="mt-6 h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full w-[87%] bg-white" />
              </div>
            </div>

            {/* Recommendation Card */}
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-medium text-zinc-500">Recommendation</h3>
                <p className="mt-4 text-5xl font-extrabold text-emerald-400 tracking-tight">BUY</p>
              </div>
              <p className="mt-6 text-xs text-zinc-500">Signals match premium high-yield validation parameters.</p>
            </div>

            {/* Additional Analytics Metrics */}
            <div className="sm:col-span-2 rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
              <h3 className="text-sm font-medium text-zinc-500 mb-4">Financial & Risk Metrics</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-zinc-900/60 pt-4">
                <div>
                  <span className="block text-xs text-zinc-500">Rental Yield</span>
                  <span className="block mt-1 text-2xl font-bold text-white">6.4%</span>
                </div>
                <div>
                  <span className="block text-xs text-zinc-500">Risk Profile</span>
                  <span className="block mt-1 text-2xl font-bold text-zinc-300">Low</span>
                </div>
                <div>
                  <span className="block text-xs text-zinc-500">Projected Appreciation</span>
                  <span className="block mt-1 text-2xl font-bold text-white">7.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 border-t border-zinc-900 bg-black py-8 text-xs text-zinc-600">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 flex items-center justify-between">
          <span>© {new Date().getFullYear()} HavenIQ Technologies Inc.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-400 transition-colors">Support Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}