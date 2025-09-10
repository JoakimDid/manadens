import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container py-10 text-sm text-slate-400">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-emerald-500 text-xs font-bold">HW</span>
            <span>{site.name}</span>
          </div>
          <nav className="flex flex-wrap items-center gap-4">
            <a href="#features" className="hover:text-slate-200">Features</a>
            <a href="#pricing" className="hover:text-slate-200">Pricing</a>
            <a href="#testimonials" className="hover:text-slate-200">Testimonials</a>
            <a href="#faq" className="hover:text-slate-200">FAQ</a>
            <a href="mailto:hello@yourdomain.com" className="hover:text-slate-200">Contact</a>
          </nav>
          <div>© {year} {site.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
