import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Increase Patient Lifetime Value",
    description: "Patients who return spend 5x more over a lifetime. Strategic retention turns one visit into years of revenue.",
  },
  {
    title: "Turn Patients Into Referral Sources",
    description: "Happy retained patients refer more than new marketing. Build word-of-mouth growth that costs nothing to acquire.",
  },
  {
    title: "Stabilize Revenue",
    description: "Recurring patient visits create predictable revenue streams. Less reliance on constant new patient acquisition.",
  },
  {
    title: "Reduce Marketing Costs",
    description: "Patient retention is 5-7x cheaper than acquisition. Optimizing retention improves your marketing ROI dramatically.",
  },
  {
    title: "Demonstrate Consistency",
    description: "A professional, regularly-maintained website builds trust and credibility with both patients and search engines.",
  },
  {
    title: "Never Worry About Website Problems",
    description: "We handle all technical maintenance—security updates, backups, performance, and hosting—so you focus on patients.",
  },
]

export function LifetimeValueSystemBenefits() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-balance">
              The Economics of Retention
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Retention is the highest-ROI marketing strategy. Here's why your practice needs it.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4 rounded-lg border border-border bg-background p-6"
            >
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
