import { TrendingUp, Clock, Shield, DollarSign, Users, Heart } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Peace of Mind",
    description:
      "Stop worrying about security threats, outdated software, or your site going down. We handle it all so you can focus on what you do best -- caring for patients.",
  },
  {
    icon: TrendingUp,
    title: "Better Google Rankings",
    description:
      "A fast, secure, mobile-friendly website ranks higher in search results. Regular maintenance keeps your site optimized for SEO and Core Web Vitals.",
  },
  {
    icon: Clock,
    title: "Save Time & Stress",
    description:
      "No more spending hours trying to figure out why something broke or watching YouTube tutorials on WordPress updates. We handle the tech so you do not have to.",
  },
  {
    icon: DollarSign,
    title: "Avoid Costly Emergencies",
    description:
      "Proactive maintenance prevents expensive emergency fixes. A hacked website can cost thousands to recover -- prevention is always cheaper than the cure.",
  },
  {
    icon: Users,
    title: "Better Patient Experience",
    description:
      "A slow or broken website frustrates patients and sends them to competitors. Keep your site fast, functional, and professional at all times.",
  },
  {
    icon: Heart,
    title: "Extended Website Lifespan",
    description:
      "Regular maintenance extends the life of your website investment. Avoid costly rebuilds by keeping your site healthy, updated, and performing optimally.",
  },
]

export function MaintenanceBenefits() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Maintenance Matters
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              The benefits of a well-maintained website.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Your website is a critical business asset. Regular maintenance
            protects your investment and keeps your practice running smoothly
            online.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-start"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
