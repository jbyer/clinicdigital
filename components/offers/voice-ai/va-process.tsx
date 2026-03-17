import { Phone, BrainCircuit, Rocket, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Discovery & Strategy Session",
    description:
      "We learn your practice workflows, call handling procedures, common inquiries, and booking rules. You leave with a clear Voice AI strategy tailored to your specialty.",
  },
  {
    icon: BrainCircuit,
    step: "02",
    title: "Custom Voice Training & Build",
    description:
      "We train the Voice AI on your services, FAQs, protocols, and scheduling rules. Custom conversation flows are designed for each call type, including qualification logic and escalation paths.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Integration & Deployment",
    description:
      "We connect the Voice AI to your phone system, CRM, and calendar. Thorough testing ensures every call flow works flawlessly before routing live calls to your AI agent.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Optimization & Growth",
    description:
      "Once live, we monitor calls, refine responses, update training data, and optimize routing rules. Your Voice AI gets smarter every week, handling more calls effectively over time.",
  },
]

export function VoiceAIProcess() {
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
              From strategy to live Voice AI in under 2 weeks.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We handle every step -- voice training, phone integration, deployment,
            and ongoing optimization. You focus on delivering great patient care.
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
