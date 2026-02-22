import {
  Bot,
  ClipboardCheck,
  Search,
  Smartphone,
  Zap,
  ShieldCheck,
  BarChart3,
  Palette,
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Chatbot & Virtual Assistant",
    description:
      "A 24/7 AI-powered chatbot that answers patient questions, qualifies leads, and books consultations while your front desk is closed. Capture every opportunity, day or night.",
    highlights: [
      "Natural language conversations",
      "Automated appointment booking",
      "Lead qualification & routing",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Smart Patient Intake Forms",
    description:
      "Logic-driven intake forms that streamline new-patient onboarding. Auto-approve or flag patients based on your criteria, collect medical history, and reduce administrative overhead.",
    highlights: [
      "Conditional logic flows",
      "Auto-approval rules",
      "Digital consent & signatures",
    ],
  },
  {
    icon: Search,
    title: "Built-in SEO Optimization",
    description:
      "Every page is built with healthcare-specific SEO best practices -- optimized meta titles, schema markup, fast Core Web Vitals, and keyword-targeted service pages that rank on Google.",
    highlights: [
      "Medical schema markup",
      "Core Web Vitals optimized",
      "Keyword-targeted pages",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive Design",
    description:
      "Over 70% of patient searches happen on mobile. Your Smart Website is designed mobile-first with thumb-friendly navigation, click-to-call buttons, and fast-loading pages on any device.",
    highlights: [
      "Touch-optimized UI",
      "Click-to-call & tap-to-book",
      "Sub-3-second load times",
    ],
  },
  {
    icon: Zap,
    title: "Conversion-Focused Funnels",
    description:
      "Built-in marketing funnels that guide visitors from awareness to booked appointment. Strategically placed CTAs, social proof, and urgency elements maximize your booking rate.",
    highlights: [
      "Landing page funnels",
      "Email & SMS nurture sequences",
      "A/B tested CTA placement",
    ],
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-Aware & ADA Guidance",
    description:
      "Designed with healthcare compliance in mind. Secure form submissions, encrypted data handling, and accessibility best practices to protect your practice and your patients.",
    highlights: [
      "SSL & encrypted forms",
      "Accessibility guidelines",
      "Privacy-first data handling",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & CRM Integration",
    description:
      "Connect your Smart Website to your existing CRM or use our built-in patient pipeline. Track every lead source, monitor conversion rates, and follow up automatically.",
    highlights: [
      "Google Analytics & Tag Manager",
      "CRM auto-sync",
      "Lead source attribution",
    ],
  },
  {
    icon: Palette,
    title: "Custom Brand Design",
    description:
      "No cookie-cutter templates. Every Smart Website is custom-designed to match your practice's brand identity, specialty, and patient demographic with premium photography and visuals.",
    highlights: [
      "Brand-aligned color & typography",
      "Professional imagery",
      "Specialty-specific layouts",
    ],
  },
]

export function SmartWebsiteFeatures() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Smart Features
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              More than a website. A patient acquisition machine.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every Smart Website comes loaded with AI-powered tools, automation,
            and healthcare-specific features that turn visitors into booked
            patients -- on autopilot.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {feature.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
