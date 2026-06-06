import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Reduce Administrative Burden",
    description: "Your front desk handles complex patient relationships while AI manages scheduling and intake—freeing up 10+ hours per week.",
  },
  {
    title: "Eliminate Missed Calls",
    description: "Voice AI never misses a call, even after hours. Every patient call is answered professionally, increasing conversion.",
  },
  {
    title: "Dramatically Reduce No-Shows",
    description: "Automated appointment reminders via text and email cut no-show rates by up to 40%, protecting your revenue.",
  },
  {
    title: "Better Patient Experience",
    description: "Patients book appointments instantly, get immediate confirmations, and receive proactive communication—improving satisfaction.",
  },
  {
    title: "Scale Patient Volume",
    description: "Handle 3x more appointment booking requests without adding staff, keeping your practice running at maximum efficiency.",
  },
  {
    title: "HIPAA-Compliant",
    description: "All patient interactions are secure, encrypted, and fully compliant with healthcare privacy regulations.",
  },
]

export function FrontDeskAutopilotBenefits() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-balance">
              Why Your Practice Needs This
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Stop losing revenue to missed calls and admin overhead. Let AI handle the routine while your team focuses on patient care.
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
