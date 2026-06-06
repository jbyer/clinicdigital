import { CheckCircle2, Lightbulb, Zap, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Smart Lead Capture",
    description:
      "Intelligent web forms and landing pages that qualify prospects in real-time, automatically scoring them by purchase intent and likelihood to convert.",
  },
  {
    icon: TrendingUp,
    title: "Local SEO Visibility",
    description:
      "Dominate search results where your ideal patients are looking. Our SEO strategy puts you in front of high-intent prospects searching for your services.",
  },
  {
    icon: Zap,
    title: "Multi-Channel Nurturing",
    description:
      "Automated email, SMS, and social sequences keep prospects engaged from initial contact through appointment booking—no manual follow-up needed.",
  },
  {
    icon: CheckCircle2,
    title: "Lead Scoring & Qualification",
    description:
      "AI automatically identifies your hottest prospects so your team focuses on leads most likely to book, not cold outreach.",
  },
]

export function AcquisitionEngineFeatures() {
  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-balance">
              How the Acquisition Engine Works
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our complete system captures, qualifies, and nurtures every prospect automatically.
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
