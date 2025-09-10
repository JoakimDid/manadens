import { logos } from "@/lib/site";

export default function LogoCloud() {
  return (
    <section className="section">
      <div className="container">
        <p className="text-center text-sm text-slate-400">Trusted by teams at</p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 text-center text-slate-300 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="text-sm">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
