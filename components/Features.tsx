export default function Features() {
  const features = [
    {
      title: "AI Sourcing",
      desc: "Find qualified candidates from your inbound pool and public profiles. Auto-enrich with contact data.",
      icon: "🔎"
    },
    {
      title: "Resume Screening",
      desc: "Parse, dedupe, and score resumes against role criteria with transparent rationales.",
      icon: "📄"
    },
    {
      title: "Bias Guard",
      desc: "Calibration tools and masked screening reduce bias while preserving signal.",
      icon: "🛡️"
    },
    {
      title: "ATS Integrations",
      desc: "Sync pipelines with Greenhouse, Lever, and more. Push stages, notes, and emails.",
      icon: "🔗"
    },
    {
      title: "Interview Scheduling",
      desc: "One-click scheduling with Google or Outlook calendars and automated reminders.",
      icon: "📆"
    },
    {
      title: "Compliance & Security",
      desc: "SOC 2–ready controls, audit exports, and configurable retention windows.",
      icon: "✅"
    },
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need to hire at speed</h2>
          <p className="mt-4 text-slate-300">Purpose-built workflows, helpful AI, and integrations that meet you where you already work.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
