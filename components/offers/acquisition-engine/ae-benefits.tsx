import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Eliminate Lead Loss",
    description: "Capture every qualified prospect, even those who visit outside business hours. Every lead gets automatic follow-up.",
  },
  {
    title: "Reduce Sales Cycle",
    description: "Pre-qualified leads arrive at your team warm and ready, shortening the time from initial contact to booked appointment.",
  },
  {
    title: "Lower Cost Per Acquisition",
    description: "Multi-channel nurturing maximizes lifetime value from each lead, dramatically improving your patient acquisition ROI.",
  },
  {
    title: "Scale Without Hiring",
    description: "The system nurtures hundreds of prospects simultaneously—no need to add sales staff as you grow.",
  },
  {
    title: "Data-Driven Insights",
    description: "See exactly which channels and messaging resonates with your patients. Optimize campaigns based on real results.",
  },
  {
    title: "Always-On Marketing",
    description: "24/7 lead capture and nurturing keeps your practice in front of prospects even when your team is sleeping.",
  },
]

export function AcquisitionEngineBenefits() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-balance">
              Results You Can Expect
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our Acquisition Engine delivers measurable improvements in lead volume, quality, and conversion rates.
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
