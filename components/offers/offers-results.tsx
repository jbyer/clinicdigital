import { TrendingUp, Users, MapPin } from "lucide-react"

const caseStudies = [
  {
    icon: TrendingUp,
    metric: "312%",
    label: "Organic traffic growth",
    specialty: "Dermatology Practice",
    description:
      "This dermatology clinic in Austin went from page 3 to the top 3 for 'dermatologist near me' in 8 weeks using our local SEO and content strategy.",
    timeframe: "8 weeks",
  },
  {
    icon: Users,
    metric: "4.2x",
    label: "New patient inquiries",
    specialty: "MedSpa",
    description:
      "A medspa in Miami quadrupled their monthly consultation requests through Google Business Profile optimization, targeted landing pages, and automated review generation.",
    timeframe: "12 weeks",
  },
  {
    icon: MapPin,
    metric: "#1",
    label: "Local Pack ranking",
    specialty: "Dental Practice",
    description:
      "This multi-location dental group captured the top Google Local Pack position across 5 service areas with our citation building and geo-targeted content approach.",
    timeframe: "6 weeks",
  },
]

export function OffersResults() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Proven Results
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Real results for real healthcare practices.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our clients see measurable growth in organic traffic, patient
            inquiries, and local search visibility -- often within weeks, not
            months.
          </p>
        </div>

        {/* Case study cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.specialty}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* Metric header */}
              <div className="flex flex-col items-center bg-foreground px-6 py-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <study.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-4 font-heading text-4xl font-bold tracking-tight text-background lg:text-5xl">
                  {study.metric}
                </p>
                <p className="mt-1 text-sm text-background/50">{study.label}</p>
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col px-6 py-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {study.specialty}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {study.timeframe}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {study.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
