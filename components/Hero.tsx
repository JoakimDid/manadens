import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="section pt-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            New: Bias Guard & role calibration
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Hire faster with <span className="bg-gradient-to-r from-brand-400 to-emerald-400 bg-clip-text text-transparent">AI that shortlists</span> your top talent
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            {site.metaDescription}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#pricing" className="rounded-md bg-white px-5 py-3 text-slate-900 hover:bg-slate-200">Start free</a>
            <a href="#cta" className="rounded-md border border-white/20 px-5 py-3 text-white hover:bg-white/5">Request demo</a>
          </div>
          <div className="relative mt-16">
            <div className="card p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Stat kpi="10×" label="faster shortlisting" />
                <Stat kpi="95%" label="time saved on screening" />
                <Stat kpi="3–5 days" label="faster time-to-hire" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-center">
      <div className="text-3xl font-semibold">{kpi}</div>
      <div className="mt-1 text-sm text-slate-300">{label}</div>
    </div>
  );
}
