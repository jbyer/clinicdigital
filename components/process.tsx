import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Audit",
    description:
      "We analyze your current workflows, tech stack, and patient journey to identify automation opportunities and quick wins.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Design",
    description:
      "We architect a custom AI solution tailored to your practice, mapping every touchpoint for maximum impact.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Build & Deploy",
    description:
      "Our team builds, tests, and launches your AI-powered systems with zero downtime. Full training included for your staff.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimize & Scale",
    description:
      "Ongoing performance monitoring, A/B testing, and iterative improvements ensure your systems deliver compounding returns.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Process
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">From discovery to measurable results.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A proven four-step framework that transforms your practice operations with AI-powered
            automation.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center md:items-start">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-border lg:block" />
              )}

              <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-border shadow-sm">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
