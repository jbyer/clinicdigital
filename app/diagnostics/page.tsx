import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function DiagnosticsChooserPage() {
  return (
    <>
      <Navigation />
      <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
        <Image
          src="/images/hero-other-services.png"
          alt="Healthcare digital marketing workspace with service dashboards and analytics"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/80 to-foreground/90" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Free Diagnostics
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              Where is your practice losing revenue?
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
            Three free diagnostics. Each takes under 2 minutes and produces a personalized report with specific numbers — and a specific fix.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="chooser-panel">
        <div style={{ display: "none" }}>
          {/* Hidden intro div since hero section replaces it */}
        </div>
      <div className="chooser-grid">
        <Link className="chooser-card" href="/diagnostics/acquisition">
          <div className="chooser-eyebrow">Local Search &amp; Growth</div>
          <h2>Customer Acquisition Diagnostic</h2>
          <p>
            How many new patient leads go to competitors every month because of
            where you rank on Google?
          </p>
          <span className="chooser-cta">Start diagnostic →</span>
        </Link>
        <Link className="chooser-card" href="/diagnostics/revenue-leak">
          <div className="chooser-eyebrow">Front Desk &amp; Retention</div>
          <h2>Practice Revenue Leak Diagnostic</h2>
          <p>
            Missed calls, no-shows, and lapsed patients — how much revenue is
            leaking out of your schedule every month?
          </p>
          <span className="chooser-cta">Start diagnostic →</span>
        </Link>
        <Link className="chooser-card" href="/diagnostics/loyalty">
          <div className="chooser-eyebrow">Patient Lifetime Value</div>
          <h2>Lifetime Value Diagnostic</h2>
          <p>
            Lapsed contacts, loyalty gaps, referral leaks, and website
            conversion — how much revenue is already in your existing database?
          </p>
          <span className="chooser-cta">Start diagnostic →</span>
        </Link>
      </div>
      </div>
      </main>
    </>
  )
}
