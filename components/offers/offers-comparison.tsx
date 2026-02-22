import { Check, X } from "lucide-react"

const rows = [
  {
    feature: "Healthcare-specific SEO strategy",
    generic: false,
    clinicDigital: true,
  },
  {
    feature: "AI-powered content creation",
    generic: false,
    clinicDigital: true,
  },
  {
    feature: "Google Business Profile management",
    generic: true,
    clinicDigital: true,
  },
  {
    feature: "Local citation building & NAP audit",
    generic: false,
    clinicDigital: true,
  },
  {
    feature: "Automated review & reputation management",
    generic: false,
    clinicDigital: true,
  },
  {
    feature: "HIPAA-aware website development",
    generic: false,
    clinicDigital: true,
  },
  {
    feature: "24/7 AI chatbot & lead capture",
    generic: false,
    clinicDigital: true,
  },
  {
    feature: "Patient journey CRM & automation",
    generic: false,
    clinicDigital: true,
  },
  {
    feature: "Dedicated healthcare marketing strategist",
    generic: false,
    clinicDigital: true,
  },
  {
    feature: "Transparent real-time reporting dashboard",
    generic: true,
    clinicDigital: true,
  },
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

export function OffersComparison() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why ClinicDigital
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Generic agencies miss what healthcare needs.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Most marketing agencies treat medical practices like any other
            business. We built our entire platform around the unique needs of
            healthcare providers.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_100px_100px] items-center border-b border-border bg-muted/50 px-6 py-4 sm:grid-cols-[1fr_140px_140px]">
            <span className="text-sm font-semibold text-foreground">
              Feature
            </span>
            <span className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Generic Agency
            </span>
            <span className="text-center text-xs font-semibold uppercase tracking-wider text-primary">
              ClinicDigital
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_100px_100px] items-center px-6 py-3.5 sm:grid-cols-[1fr_140px_140px] ${
                i < rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-sm text-card-foreground">{row.feature}</span>
              <StatusIcon supported={row.generic} />
              <StatusIcon supported={row.clinicDigital} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
