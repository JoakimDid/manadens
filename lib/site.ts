export const site = {
  name: "HireWise AI",
  tagline: "Recruit faster with AI that shortlists top talent in minutes.",
  domain: "yourdomain.com", // ← change to your real domain (without protocol)
  twitter: "@yourhandle",
  keywords: ["AI recruiting", "ATS", "resume screening", "sourcing", "talent"],
  contactEmail: "hello@yourdomain.com",
  metaDescription: "HireWise AI helps teams source, screen, and schedule candidates 10× faster with responsible AI.",
};

export type Tier = {
  name: string;
  price: string;
  period?: string;
  highlight?: boolean;
  cta: string;
  features: string[];
  priceId?: string; // optional if you later wire Stripe
};

export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    cta: "Start free",
    features: [
      "100 resume parses/mo",
      "1 job pipeline",
      "Basic AI screening",
      "Email support"
    ],
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    highlight: true,
    cta: "Upgrade to Pro",
    features: [
      "Unlimited parses",
      "Up to 10 job pipelines",
      "Bias guard & calibration",
      "Calendar scheduling",
      "Priority support"
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cta: "Contact sales",
    features: [
      "SAML SSO",
      "SOC 2 report",
      "Custom integrations",
      "Dedicated success manager"
    ],
  },
];

export const faqs = [
  {
    q: "Is the AI compliant and unbiased?",
    a: "We include bias checks, human-in-the-loop review, and configurable scoring to keep you compliant. You can export rationales for audit."
  },
  {
    q: "How do I connect my ATS?",
    a: "We support common ATSs (Greenhouse, Lever, Workday) via API. Enterprise plans get custom connectors."
  },
  {
    q: "Do you store candidate data?",
    a: "You control retention windows. Data is encrypted in transit and at rest. Enterprise plans support regional data residency."
  },
  {
    q: "Can I try it without a credit card?",
    a: "Yes — the Starter plan is free. Upgrade anytime."
  }
];

export const logos = ["Acme", "Globex", "Umbrella", "Initech", "Hooli", "Stark"];
