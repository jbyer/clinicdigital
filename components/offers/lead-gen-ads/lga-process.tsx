import { MessageSquare, Palette, Rocket, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Strategy Call & Targeting",
    description:
      "We discuss your goals, target services, ideal patient demographics, and geographic area. You leave with a clear campaign strategy and targeting plan.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Ad Creative & Setup",
    description:
      "We create compelling ad copy, visuals, and lead capture forms. We build out your campaign in Facebook/Google with precision targeting and conversion tracking.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Campaign Launch",
    description:
      "Your campaign goes live within 5-7 days. We monitor initial performance, make quick adjustments, and ensure ads are approved and running smoothly.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Optimization & Results",
    description:
      "Throughout the 4 months campaign, we optimize for best-performing ads, audiences, and placements. You receive leads directly and a full performance report at the end.",
  },
]

export function LeadGenAdsProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              From strategy call to leads in under 2 weeks.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We handle the strategy, creative, and optimization. You focus on
            converting the leads into booked patients.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="absolute top-14 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] hidden h-px bg-border lg:block" />

          {steps.map((step) => (
            <article
              key={step.step}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number circle */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-primary bg-background">
                <step.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Step label */}
              <span className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
                Step {step.step}
              </span>

              <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
