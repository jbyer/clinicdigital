import { MessageSquare, BrainCircuit, Rocket, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery & Strategy Session",
    description:
      "We learn your practice workflows, common patient questions, appointment types, and qualification criteria. You leave with a clear AI chatbot strategy tailored to your specialty.",
  },
  {
    icon: BrainCircuit,
    step: "02",
    title: "Custom AI Training & Build",
    description:
      "We train the chatbot on your services, FAQs, policies, and booking rules. Custom conversation flows are designed for each service line, including qualification logic and escalation paths.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Integration & Deployment",
    description:
      "We connect the chatbot to your CRM, calendar, and communication channels -- website, SMS, social media. Thorough testing ensures every flow works flawlessly before going live.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Optimization & Growth",
    description:
      "Once live, we monitor conversations, refine responses, update training data, and optimize qualification rules. Your chatbot gets smarter every week, booking more patients over time.",
  },
]

export function ChatbotProcess() {
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
              From strategy to live chatbot in under 2 weeks.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We handle every step -- training, integration, deployment, and
            ongoing optimization. You focus on delivering great patient care.
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
