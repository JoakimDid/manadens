export default function Testimonials() {
  const items = [
    {
      quote: "We cut screening time from days to hours. The shortlist quality is outstanding.",
      name: "Maya Chen",
      role: "Head of Talent, Globex"
    },
    {
      quote: "Bias Guard helps our team stay consistent and fair across roles.",
      name: "Omar Patel",
      role: "Recruiting Lead, Acme"
    },
    {
      quote: "The integrations are seamless. Our ATS stays the source of truth.",
      name: "Ava Robinson",
      role: "People Ops, Initech"
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Loved by modern recruiting teams</h2>
          <p className="mt-3 text-slate-300">Here’s what users say after their first week.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="card p-6">
              <blockquote className="text-sm text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <span className="text-sm">{t.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
