import { tiers } from "@/lib/site";
import clsx from "clsx";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Start free, then scale as you grow. Cancel anytime.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={clsx("card p-6", t.highlight && "ring-2 ring-brand-500")}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                {t.highlight && <span className="rounded-full bg-brand-500/20 px-2 py-1 text-xs text-brand-200">Most popular</span>}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-semibold">{t.price}</span>
                {t.period && <span className="pb-1 text-slate-300">{t.period}</span>}
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#cta" className={clsx(
                  "block w-full rounded-md px-4 py-2 text-center text-sm font-medium transition",
                  t.highlight ? "bg-brand-500 text-white hover:bg-brand-600" : "border border-white/20 text-white hover:bg-white/5"
                )}>
                  {t.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
