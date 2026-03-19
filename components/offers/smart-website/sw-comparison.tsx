import { Check, X } from "lucide-react"

const rows = [
  { feature: "Custom healthcare-specific design", generic: false, smart: true },
  { feature: "AI chatbot & virtual assistant", generic: false, smart: true },
  { feature: "Automated patient intake forms", generic: false, smart: true },
  { feature: "Built-in SEO optimization", generic: true, smart: true },
  { feature: "Mobile-first responsive design", generic: true, smart: true },
  { feature: "CRM integration & lead pipeline", generic: false, smart: true },
  { feature: "Conversion-optimized funnels", generic: false, smart: true },
  { feature: "HIPAA-aware form handling", generic: false, smart: true },
  { feature: "Automated email & SMS follow-ups", generic: false, smart: true },
  { feature: "Ongoing optimization & maintenance", generic: false, smart: true },
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

export function SmartWebsiteComparison() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Smart Website
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              A template website cannot compete with this.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Generic website builders and freelancers give you a digital
            brochure. A Smart Website gives you a patient acquisition system.
          </p>
        </div>

        {/* Table */}
        <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
          <div className="min-w-[400px]">
            <div className="grid grid-cols-[1fr_80px_80px] items-center border-b border-border bg-muted/50 px-4 py-4 sm:grid-cols-[1fr_120px_120px] sm:px-6">
              <span className="text-xs font-semibold text-foreground sm:text-sm">
                Feature
              </span>
              <span className="text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                Generic
              </span>
              <span className="text-center text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                Smart
              </span>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_80px_80px] items-center px-4 py-3 sm:grid-cols-[1fr_120px_120px] sm:px-6 sm:py-3.5 ${
                  i < rows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-xs text-card-foreground sm:text-sm">
                  {row.feature}
                </span>
                <StatusIcon supported={row.generic} />
                <StatusIcon supported={row.smart} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
