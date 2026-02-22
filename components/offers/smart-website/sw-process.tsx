import { MessageSquare, Palette, Rocket, Settings } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery & Strategy Call",
    description:
      "We learn about your practice, patient demographics, competitive landscape, and growth goals. You walk away with a clear website strategy tailored to your specialty.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Custom Design & Content",
    description:
      "Our healthcare design team creates a brand-aligned mockup with compelling, SEO-optimized copy. You review and approve before we build a single line of code.",
  },
  {
    icon: Settings,
    step: "03",
    title: "Development & Automation Setup",
    description:
      "We build your Smart Website, integrate the AI chatbot, configure intake forms, connect your CRM, and set up conversion funnels and automated follow-ups.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Ongoing Optimization",
    description:
      "Your site goes live, fully optimized for search engines and conversions. We continuously monitor performance, run updates, and optimize to keep patients flowing in.",
  },
]

export function SmartWebsiteProcess() {
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
              From discovery to launch in 4 weeks.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We handle everything -- design, development, copywriting, SEO, and
            automation. You focus on your patients.
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
