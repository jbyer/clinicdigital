import Link from "next/link"

export default function DiagnosticsChooserPage() {
  return (
    <div className="chooser-panel">
      <div className="form-intro">
        <h1>Where is your practice losing revenue?</h1>
        <p>
          Three free diagnostics. Each takes under 2 minutes and produces a
          personalized report with specific numbers — and a specific fix.
        </p>
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
  )
}
