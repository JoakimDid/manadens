import { faqs } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-lg border border-white/10 bg-white/[0.03] p-4 open:bg-white/[0.05]">
              <summary className="cursor-pointer select-none text-left text-sm font-medium text-white marker:hidden">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
