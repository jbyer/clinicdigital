import { Check, X } from "lucide-react"

const rows = [
  { feature: "24/7 patient availability", generic: false, ai: true },
  { feature: "Natural language conversations", generic: false, ai: true },
  { feature: "Automated appointment booking", generic: false, ai: true },
  { feature: "Lead qualification & scoring", generic: false, ai: true },
  { feature: "Multi-channel (web, SMS, social)", generic: false, ai: true },
  { feature: "Custom-trained on your practice", generic: false, ai: true },
  { feature: "CRM & workflow integration", generic: true, ai: true },
  { feature: "HIPAA-aware data handling", generic: false, ai: true },
  { feature: "Automated follow-up sequences", generic: false, ai: true },
  { feature: "Continuous learning & optimization", generic: false, ai: true },
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

export function ChatbotComparison() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why AI Chatbot
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              A contact form cannot compete with this.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Basic live chat and contact forms leave money on the table. An
            AI chatbot converts visitors into booked patients -- instantly,
            intelligently, and around the clock.
          </p>
        </div>

        {/* Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-[1fr_100px_100px] items-center border-b border-border bg-muted/50 px-6 py-4 sm:grid-cols-[1fr_140px_140px]">
            <span className="text-sm font-semibold text-foreground">
              Capability
            </span>
            <span className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contact Form
            </span>
            <span className="text-center text-xs font-semibold uppercase tracking-wider text-primary">
              AI Chatbot
            </span>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_100px_100px] items-center px-6 py-3.5 sm:grid-cols-[1fr_140px_140px] ${
                i < rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-sm text-card-foreground">
                {row.feature}
              </span>
              <StatusIcon supported={row.generic} />
              <StatusIcon supported={row.ai} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
