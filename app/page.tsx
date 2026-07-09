import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans antialiased selection:bg-zinc-800 selection:text-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-tr from-zinc-400 to-white shadow-sm" />
            <span className="text-xl font-bold tracking-tight text-white">Haven<span className="text-zinc-400">IQ</span></span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="transition-colors hover:text-white">Features</a>
            <a href="#why-us" className="transition-colors hover:text-white">Why HavenIQ</a>
            <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
          </nav>
          <div>
            <a href="#analyze" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-zinc-200">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="analyze" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_50%)]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-400 backdrop-blur">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Next-Gen Real Estate Intelligence
          </div>
          
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl max-w-3xl mx-auto leading-[1.15]">
            Unpack any property investment in <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">seconds</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto">
            Instantly evaluate risk, project yields, and uncover hidden market variables for any residential or commercial address.
          </p>

          {/* Search Box Component */}
          <div className="mt-10 max-w-2xl mx-auto">
            <form className="relative flex p-1.5 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur shadow-2xl focus-within:border-zinc-700 transition-colors">
              <input 
                type="text" 
                placeholder="Enter property address or Zillow URL..." 
                className="w-full bg-transparent px-4 py-3 text-base text-white placeholder-zinc-500 focus:outline-none"
              />
              <button 
                type="submit" 
                className="flex items-center justify-center whitespace-nowrap rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
              >
                Analyze Property
              </button>
            </form>
            <p className="mt-3 text-xs text-zinc-500">Try demo addresses: 742 Evergreen Terrace or 221B Baker Street</p>
          </div>
        </div>
      </section>

      <hr className="border-zinc-900 mx-auto max-w-7xl" />

      {/* Feature Cards Section */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-zinc-400">Powerful Analytics</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to buy with certainty</p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Card 1 */}
              <div className="flex flex-col rounded-2xl border border-zinc-900 bg-zinc-950 p-8 hover:border-zinc-800 transition-colors">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                  <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-mono text-zinc-300">01</div>
                  Predictive Yield Modeling
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">Leverage machine learning algorithms trained on decades of local market trends to project net operating income and long-term appreciation models.</p>
                </dd>
              </div>
              
              {/* Card 2 */}
              <div className="flex flex-col rounded-2xl border border-zinc-900 bg-zinc-950 p-8 hover:border-zinc-800 transition-colors">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                  <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-mono text-zinc-300">02</div>
                  Hyper-Local Risk Audits
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">Instantly scan climate risks, local zoning adaptations, infrastructure pipelines, and neighborhood demographic shifts before signing agreements.</p>
                </dd>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col rounded-2xl border border-zinc-900 bg-zinc-950 p-8 hover:border-zinc-800 transition-colors">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                  <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-mono text-zinc-300">03</div>
                  Automated Sourcing & Comps
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">Skip the manual research. Receive real-time off-market comparison lists matched dynamically against historical cash flows and cap rates.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <hr className="border-zinc-900 mx-auto max-w-7xl" />

      {/* Why HavenIQ Section */}
      <section id="why-us" className="py-24 sm:py-32 bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Engineered for serious investors who value clarity over guesswork
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Traditional property underwriting takes hours of spreadsheet tuning and fragmented research. HavenIQ aggregates over 140 disparate data layers to deliver a pristine institutional-grade prospectus report instantly.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-zinc-700 pl-4">
                  <span className="block text-2xl font-bold text-white">140+</span>
                  <span className="text-sm text-zinc-500">Data pipelines queried</span>
                </div>
                <div className="border-l-2 border-zinc-700 pl-4">
                  <span className="block text-2xl font-bold text-white">&lt; 5s</span>
                  <span className="text-sm text-zinc-500">Analysis generation time</span>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 backdrop-blur">
              <div className="space-y-4">
                <div className="rounded-lg bg-zinc-900 p-4 border border-zinc-800">
                  <div className="flex justify-between text-xs text-zinc-500 mb-1">
                    <span>Estimated Cap Rate</span>
                    <span className="text-emerald-400 font-medium">+6.4%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[74%] bg-gradient-to-r from-zinc-500 to-white" />
                  </div>
                </div>
                <div className="rounded-lg bg-zinc-900 p-4 border border-zinc-800">
                  <div className="flex justify-between text-xs text-zinc-500 mb-1">
                    <span>Zoning Risk Vector</span>
                    <span className="text-zinc-300 font-medium">Low Risk</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[18%] bg-zinc-400" />
                  </div>
                </div>
                <div className="rounded-lg bg-zinc-900 p-4 border border-zinc-800">
                  <div className="flex justify-between text-xs text-zinc-500 mb-1">
                    <span>Liquidity Score</span>
                    <span className="text-zinc-300 font-medium">88/100</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[88%] bg-gradient-to-r from-zinc-500 to-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black px-6 py-20 text-center shadow-2xl sm:px-16">
            <div className="absolute top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stop guessing. Start under-writing with absolute clarity.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Join elite modern syndicates and casual investors leveraging data to outperform local markets.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#analyze" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200">
                Run Free Analysis
              </a>
              <a href="#features" className="text-sm font-semibold leading-6 text-white transition-colors hover:text-zinc-300">
                Learn our methodology <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black py-12 text-sm text-zinc-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-zinc-700" />
            <span className="font-semibold text-zinc-300">HavenIQ</span>
            <span>© {new Date().getFullYear()} HavenIQ Technologies Inc.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}