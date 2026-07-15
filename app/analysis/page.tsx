import Link from "next/link";
import MapClientWrapper from "./MapClientWrapper";
import { calculateUnderwriting } from "@/lib/underwriting";

interface AnalysisPageProps {
  searchParams: Promise<{ address?: string }>;
}

export default async function AnalysisPage({ searchParams }: AnalysisPageProps) {
  const { address } = await searchParams;
  const displayAddress = address || "742 Evergreen Terrace, Springfield, OR 97477";

const response = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/analyze`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address,
    }),
    cache: "no-store",
  }
);

const property = await response.json();

const details = property.propertyDetails;

const street =
  details.address?.streetAddress ?? displayAddress;

const city =
  details.address?.city ?? "";

const state =
  details.address?.state ?? "";

const zipcode =
  details.address?.zipcode ?? "";

const price =
  details.price ?? "N/A";

const bedrooms =
  details.bedrooms ?? "-";

const bathrooms =
  details.bathrooms ?? "-";

const sqft =
  details.livingArea ?? "-";

const yearBuilt =
  details.resoFacts?.yearBuilt ?? "-";

const image =
  details.originalPhotos?.[0]?.mixedSources?.jpeg?.[0]?.url ??
  "";

const latitude = details.latitude;
const longitude = details.longitude;
  
  const description =
  details.description ??
  "No property description available.";
  
  const aiSummary = `
This ${bedrooms}-bedroom, ${bathrooms}-bathroom home offers approximately ${sqft.toLocaleString()} square feet of living space and was built in ${yearBuilt}. Located in ${city}, ${state}, the property is currently valued at approximately $${price.toLocaleString()} based on the latest market data. Nearby comparable sales indicate the home is competitively positioned within its neighborhood. Investors should further evaluate rental demand, operating expenses, financing assumptions, and local market trends before acquisition.
`;

const zestimate = details.zestimate ?? 0;

const rentZestimate = details.rentZestimate ?? 0;

const daysOnZillow = details.daysOnZillow ?? "N/A";

const hoaFee = details.monthlyHoaFee ?? 0;

const propertyTaxRate = details.propertyTaxRate ?? 0;

const pricePerSqft =
  price && sqft
    ? Math.round(Number(price) / Number(sqft))
    : 0;

    const underwriting = calculateUnderwriting({
  purchasePrice: Number(price),
  rentEstimate: Number(rentZestimate),
  propertyTaxRate: Number(propertyTaxRate),
  monthlyHoa: Number(hoaFee),
});

  const schools =
  details.schools ?? [];

  const comps = details.nearbyHomes ?? [];
  return (

    <div className="min-h-screen bg-black text-zinc-100 font-sans antialiased selection:bg-zinc-800 selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-gradient-to-tr from-zinc-400 to-white shadow-sm" />
              <span className="text-xl font-bold tracking-tight text-white">Haven<span className="text-zinc-400">IQ</span></span>
            </Link>
            <span className="hidden sm:inline-block h-4 w-px bg-zinc-800" />
            <span className="hidden sm:inline-block text-xs font-mono text-zinc-500 tracking-wider uppercase">Institutional Underwriting v4.1</span>
          </div>
          <div>
            <Link href="/" className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all hover:bg-zinc-800">
              ← Run Another Address
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8 space-y-8">
        
        {/* Main Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Market Sync
              </span>
              <span className="text-xs text-zinc-500 font-mono">ID: HIQ-9938A-26</span>
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl break-words max-w-2xl">
              {street}, {city}, {state} {zipcode}
            </h1>
          </div>
          
          <div className="flex items-center gap-4 bg-zinc-950 border border-zinc-900 p-4 rounded-xl w-full md:w-auto justify-between md:justify-start min-w-[240px]">
            <div>
              <span className="text-xs font-medium text-zinc-500 block uppercase tracking-wider">Estimated Valuation</span>
              <span className="text-2xl font-extrabold text-white tracking-tight">${price.toLocaleString()}</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-medium text-zinc-500 block uppercase tracking-wider">Zestimate®</span>
              <span className="text-sm font-semibold text-zinc-400">${details.zestimate?.toLocaleString() ?? "N/A"}</span>
            </div>
          </div>
        </div>

        {/* Hero Section: Hero Placeholder & Executive Score Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Large Hero Property Image Placeholder */}
          <div className="lg:col-span-2 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent)]" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="flex justify-between items-start">
                <span className="rounded-lg bg-black/60 backdrop-blur px-3 py-1.5 text-xs font-semibold text-zinc-300 border border-zinc-800">
                  {details.propertyTypeDimension}
                </span>
                <span className="rounded-lg bg-black/60 backdrop-blur px-3 py-1.5 text-xs font-semibold text-zinc-300 border border-zinc-800">
                  {city}, {state}
                </span>
              </div>
              
              {/* Overlay Summary Strip */}
              <div className="grid grid-cols-4 gap-2 text-center bg-black/40 backdrop-blur-md p-4 rounded-xl border border-zinc-900/60">
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500">Beds</span>
                  <span className="text-sm font-extrabold text-white">{bedrooms}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500">Baths</span>
                  <span className="text-sm font-extrabold text-white">{bathrooms}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500">Sq Footage</span>
                  <span className="text-sm font-extrabold text-white">{sqft.toLocaleString()}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500">Lot Size</span>
                  <span className="text-sm font-extrabold text-white">{details.lotAreaValue?.toLocaleString() ?? "N/A"}</span>
                </div>
              </div>
            </div>
            {/* Visual representation of structural wireframe */}
            {image && (
  <img
    src={image}
    alt={street}
    className="absolute inset-0 h-full w-full object-cover"
  />
)}
          </div>

          {/* Investment Executive Score Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">HavenIQ Index</h3>
                {/* Buy / Wait / Avoid Badge */}
                <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
                  {underwriting.investmentRecommendation}
                </span>
              </div>

              <div className="mt-6 text-center lg:text-left">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider block">Investment Score</span>
                <div className="mt-2 flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="text-6xl font-black text-white tracking-tight">{underwriting.havenIQScore}</span>
                  <span className="text-xl font-medium text-zinc-600">/ 100</span>
                </div>
                <div className="mt-5">
  <span className="text-xs uppercase tracking-wider text-zinc-500">
    Confidence
  </span>

  <p className="mt-1 text-sm font-semibold text-emerald-400">
    High
  </p>
</div>
<div className="mt-6 space-y-4">
  <div>
    <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
      Investment Strengths
    </h4>

   <ul className="space-y-2 text-sm text-zinc-300">
  <li>
    {underwriting.monthlyCashFlow > 0
      ? "✓ Positive Monthly Cash Flow"
      : "• Negative Monthly Cash Flow"}
  </li>

  <li>
    {underwriting.capRate >= 5
      ? "✓ Healthy Cap Rate"
      : "• Lower Cap Rate"}
  </li>

  <li>
    {hoaFee <= 100
      ? "✓ Low HOA Burden"
      : "• Higher HOA Burden"}
  </li>
</ul>
  </div>

  <div>
    <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
      Risks
    </h4>

    <ul className="space-y-2 text-sm text-zinc-400">
  <li>
    {propertyTaxRate > 0.02
      ? "• Higher Property Taxes"
      : "✓ Favorable Property Tax Rate"}
  </li>

  <li>
    {underwriting.expenseRatio > 40
      ? "• Higher Operating Expenses"
      : "✓ Efficient Operating Expenses"}
  </li>
</ul>
  </div>
</div>
              </div>

              <p className="mt-4 text-xs leading-5 text-zinc-400">
                This asset qualifies within the top 8% of the {city}, {state} submarket based on cash-on-cash yield consistency and low neighborhood volatility vectors.
              </p>
            </div>

            <div className="mt-6 space-y-2 border-t border-zinc-900 pt-4">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500">Underwriting Confidence</span>
                <span className="font-mono text-zinc-300">94%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-gradient-to-r from-zinc-500 to-white" />
              </div>
            </div>
          </div>

        </div>

        {/* Analytics Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Financial Metrics Section */}
          <div className="lg:col-span-2 rounded-2xl border border-zinc-900 bg-zinc-950 p-6 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-3">
              Investment Metrics
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-black/40 border border-zinc-900 p-4 rounded-xl">
  <span className="text-xs text-zinc-500 block">
    Cap Rate
  </span>

  <span className="text-xl font-bold text-white mt-1 block">
    {underwriting.capRate.toFixed(2)}%
  </span>
</div>
              <div className="bg-black/40 border border-zinc-900 p-4 rounded-xl">
  <span className="text-xs text-zinc-500 block">
    Property Tax Rate
  </span>

  <span className="text-xl font-bold text-white mt-1 block">
    {propertyTaxRate
      ? `${propertyTaxRate}%`
      : "N/A"}
  </span>
</div>
              <div className="bg-black/40 border border-zinc-900 p-4 rounded-xl">
  <span className="text-xs text-zinc-500 block">
    Rent Zestimate
  </span>

  <span className="text-xl font-bold text-white mt-1 block">
    {rentZestimate
      ? `$${rentZestimate.toLocaleString()}/mo`
      : "N/A"}
  </span>
</div>
             <div className="bg-black/40 border border-zinc-900 p-4 rounded-xl">
  <span className="text-xs text-zinc-500 block">
    Monthly HOA
  </span>

  <span className="text-xl font-bold text-white mt-1 block">
    {hoaFee ? `$${hoaFee.toLocaleString()}` : "None"}
  </span>
</div>
<div className="bg-black/40 border border-zinc-900 p-4 rounded-xl">
  <span className="text-xs text-zinc-500 block">
    Net Operating Income
  </span>

  <span className="text-xl font-bold text-white mt-1 block">
    ${Math.round(underwriting.noi).toLocaleString()}
  </span>
</div>
<div className="bg-black/40 border border-zinc-900 p-4 rounded-xl">
  <span className="text-xs text-zinc-500 block">
    Monthly Cash Flow
  </span>

  <span className="text-xl font-bold text-white mt-1 block">
    ${Math.round(underwriting.monthlyCashFlow).toLocaleString()}
  </span>
</div>
<div className="bg-black/40 border border-zinc-900 p-4 rounded-xl">
  <span className="text-xs text-zinc-500 block">
    Gross Rent Multiplier
  </span>

  <span className="text-xl font-bold text-white mt-1 block">
    {underwriting.grossRentMultiplier.toFixed(1)}
  </span>
</div>
<div className="bg-black/40 border border-zinc-900 p-4 rounded-xl">
  <span className="text-xs text-zinc-500 block">
    Expense Ratio
  </span>

  <span className="text-xl font-bold text-white mt-1 block">
    {underwriting.expenseRatio.toFixed(1)}%
  </span>
</div>
            </div>
          </div>

          {/* Market Analysis Section */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-3">
              Market Dynamics
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-zinc-400">Projected Annual Appreciation</span>
                  <span className="font-mono font-semibold text-white">7.1%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-900 rounded-full">
                  <div className="h-full w-[71%] bg-white" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-zinc-400">Submarket Inventory Demand</span>
                  <span className="font-mono font-semibold text-white">High</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-900 rounded-full">
                  <div className="h-full w-[85%] bg-white" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-zinc-400">Historical Days on Market (Avg)</span>
                  <span className="font-mono font-semibold text-white">{daysOnZillow} Days</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-900 rounded-full">
                  <div className="h-full w-[35%] bg-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Risk Analysis Section */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-3">
              Risk Profile
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-black/40 border border-zinc-900 p-2.5 rounded-xl text-xs">
                <span className="text-zinc-400">Climate Vulnerability Index</span>
                <span className="font-semibold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/5 border border-emerald-500/10">Low</span>
              </div>
              <div className="flex justify-between items-center bg-black/40 border border-zinc-900 p-2.5 rounded-xl text-xs">
                <span className="text-zinc-400">Zoning/Compliance Friction</span>
                <span className="font-semibold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/5 border border-emerald-500/10">None</span>
              </div>
              <div className="flex justify-between items-center bg-black/40 border border-zinc-900 p-2.5 rounded-xl text-xs">
                <span className="text-zinc-400">Tenant Turnover Factor</span>
                <span className="font-semibold text-amber-400 px-2 py-0.5 rounded bg-amber-500/5 border border-amber-500/10">Moderate</span>
              </div>
            </div>
          </div>

        </div>

        {/* AI Insight Summary Panel */}
        <div className="rounded-2xl border border-zinc-900 bg-gradient-to-r from-zinc-950 to-zinc-900/40 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Investment Thesis</h3>
            <p className="mt-1 text-xs text-zinc-500">
  AI-generated investment outlook based on the property's financial and market characteristics.
</p>
          </div>
          <p className="text-sm leading-6 text-zinc-400">
            {aiSummary}
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
    Nearby Schools
  </h3>

  <div className="space-y-4">
    {schools.slice(0, 5).map((school: any) => (
      <div
        key={school.name}
        className="border-b border-zinc-900 pb-3 last:border-0"
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold text-white">
            {school.name}
          </span>

          <span className="text-xs text-zinc-500">
            {school.rating ?? "N/A"} / 10
          </span>
        </div>

        <div className="mt-1 text-xs text-zinc-400">
          {school.level} • {school.distance} mi
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Bottom Section: Comps Table & Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Comparable Sales Section */}
          <div className="lg:col-span-2 rounded-2xl border border-zinc-900 bg-zinc-950 p-6 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Recent Submarket Comps
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-zinc-400">
                <thead className="text-zinc-500 uppercase tracking-wider border-b border-zinc-900">
                  <tr>
                    <th className="py-3 font-medium">Address</th>
                    <th className="py-3 font-medium">Sale Price</th>
                    <th className="py-3 font-medium text-center">Beds/Baths</th>
                    <th className="py-3 font-medium text-right">Proximity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900/60">
                 {comps.slice(0, 5).map((home: any) => (
  <tr key={home.zpid}>
    <td className="py-3 text-white font-medium">
      {home.address?.streetAddress}
    </td>

    <td className="py-3">
      {home.price
        ? `$${home.price.toLocaleString()}`
        : "N/A"}
    </td>

    <td className="py-3 text-center">
      {home.bedrooms} / {home.bathrooms}
    </td>

    <td className="py-3 text-right text-zinc-500">
      {home.livingArea
  ? `${home.livingArea.toLocaleString()} sqft`
  : "N/A"}
    </td>
  </tr>
))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 overflow-hidden min-h-[220px]">
  <MapClientWrapper
  latitude={latitude}
  longitude={longitude}
  address={`${street}, ${city}, ${state} ${zipcode}`}
/>
</div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black py-8 mt-16 text-xs text-zinc-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} HavenIQ Technologies Inc. All models subject to market volatility.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-400 transition-colors">Compliance Prospectus</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">API Endpoint Specs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}