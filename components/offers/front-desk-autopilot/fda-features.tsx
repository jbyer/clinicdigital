import { MessageSquare, Phone, Calendar, Brain } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Intelligent conversational AI that greets visitors, answers FAQ, pre-qualifies leads, and books appointments without human intervention.",
  },
  {
    icon: Phone,
    title: "Voice AI Reception",
    description:
      "Natural-sounding AI that answers phone calls, understands patient needs, schedules appointments, and transfers complex issues to your team.",
  },
  {
    icon: Calendar,
    title: "Smart Appointment Booking",
    description:
      "Patients book appointments anytime, anywhere via web, text, or phone. Automatic reminders reduce no-shows and missed appointments.",
  },
  {
    icon: Brain,
    title: "Intake Automation",
    description:
      "AI collects patient information, insurance details, and medical history before appointments—so your front desk has one less task.",
  },
]

export function FrontDeskAutopilotFeatures() {
  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-balance">
              Your AI-Powered Front Desk
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A complete suite of AI tools that replace repetitive front desk tasks while improving patient experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-background p-6 hover:border-primary/50 transition-colors"
              >
                <Icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
