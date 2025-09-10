import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { site, tiers, faqs } from "@/lib/site";

function JsonLd() {
  const offers = tiers.map((t) => ({
    "@type": "Offer",
    "name": t.name,
    "price": t.price.replace("$", "").replace("/mo", ""),
    "priceCurrency": "USD",
    "url": `https://${site.domain}/#pricing`
  }));
  const faqItems = faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }));

  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": site.name,
        "description": site.metaDescription,
        "brand": site.name,
        "offers": offers
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems
      }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <JsonLd />
    </main>
  );
}
