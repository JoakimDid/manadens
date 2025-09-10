"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong");
      setDone(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "Failed to submit");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="cta" className="section">
      <div className="container">
        <div className="card p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Ready to see {site.name} in action?</h3>
              <p className="mt-2 text-slate-300">Get a guided demo and a free proof-of-value on your next role.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                <li>• 7‑day free trial, no credit card</li>
                <li>• Bring a role, get a shortlist</li>
                <li>• Security & compliance review</li>
              </ul>
            </div>
            <div>
              {!done ? (
                <form onSubmit={onSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-xs text-slate-300">Name</label>
                    <input id="name" name="name" type="text" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-slate-300">Work email*</label>
                    <input id="email" name="email" required type="email" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs text-slate-300">Company</label>
                    <input id="company" name="company" type="text" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Acme Inc." />
                  </div>
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <button disabled={loading} className="w-full rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-50">
                    {loading ? "Submitting..." : "Request demo"}
                  </button>
                  <p className="text-xs text-slate-400">Or email us at <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
                </form>
              ) : (
                <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                  Thanks! We'll be in touch soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
