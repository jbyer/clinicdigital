import { Globe, Wrench, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Beautiful Modern Website",
    description:
      "A custom-designed, mobile-optimized website that showcases your services and converts visitors into patients. Built for performance and conversion.",
  },
  {
    icon: Wrench,
    title: "Continuous Maintenance & Support",
    description:
      "Regular updates, security patches, performance optimization, and technical support so your website is always running at peak performance.",
  },
  {
    icon: Users,
    title: "Patient Retention CRM",
    description:
      "Built-in system to track patient interactions, automate follow-ups, send appointment reminders, and keep patients engaged between visits.",
  },
  {
    icon: TrendingUp,
    title: "Patient Loyalty Programs",
    description:
      "Automated workflows that reward repeat patients, encourage referrals, and turn satisfied patients into your best marketing channel.",
  },
]

export function LifetimeValueSystemFeatures() {
  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-balance">
              The Complete Retention Infrastructure
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Everything you need to keep patients engaged, satisfied, and coming back.
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
