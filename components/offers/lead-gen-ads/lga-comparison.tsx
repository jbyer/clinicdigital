import { Check, X } from "lucide-react"

const rows = [
  { feature: "Campaign live in under 1 week", agency: false, us: true },
  { feature: "You own your ad account", agency: false, us: true },
  { feature: "Transparent ad spend (no markup)", agency: false, us: true },
  { feature: "No long-term contracts", agency: false, us: true },
  { feature: "Focused on lead generation only", agency: false, us: true },
  { feature: "Healthcare-specific targeting", agency: true, us: true },
  { feature: "Performance tracking & reporting", agency: true, us: true },
  { feature: "A/B tested ad creative", agency: true, us: true },
  { feature: "Multi-platform reach", agency: true, us: true },
]

function StatusIcon({ supported }: { supported: boolean }) {
  return supported ? (
    <div className="flex items-center justify-center">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15">
        <Check className="h-4 w-4 text-accent" />
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted">
        <X className="h-4 w-4 text-muted-foreground/50" />
      </div>
    </div>
  )
}

export function LeadGenAdsComparison() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Traditional agencies charge monthly. We don{"'"}t.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Most marketing agencies lock you into expensive monthly retainers.
            Our ads-only approach delivers leads fast with a simple one-time fee.
          </p>
        </div>

        {/* Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-[1fr_100px_100px] items-center border-b border-border bg-muted/50 px-6 py-4 sm:grid-cols-[1fr_140px_140px]">
            <span className="text-sm font-semibold text-foreground">
              Feature
            </span>
            <span className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Typical Agency
            </span>
            <span className="text-center text-xs font-semibold uppercase tracking-wider text-primary">
              ClinicDigital
            </span>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_100px_100px] items-center px-6 py-3.5 sm:grid-cols-[1fr_140px_140px] ${i < rows.length - 1 ? "border-b border-border" : ""
                }`}
            >
              <span className="text-sm text-card-foreground">
                {row.feature}
              </span>
              <StatusIcon supported={row.agency} />
              <StatusIcon supported={row.us} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
