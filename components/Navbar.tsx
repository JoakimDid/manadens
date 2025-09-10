"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { site } from "@/lib/site";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={clsx(
      "sticky top-0 z-50 transition-all",
      scrolled ? "backdrop-blur bg-slate-950/70 border-b border-white/10" : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-emerald-500 font-bold">HW</span>
          <span className="font-semibold">{site.name}</span>
        </Link>
        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <div className="hidden gap-3 md:flex">
          <Link href="/#" className="text-sm text-slate-300 hover:text-white">Sign in</Link>
          <a href="#cta" className="rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">Get started</a>
        </div>
      </div>
    </header>
  );
}
