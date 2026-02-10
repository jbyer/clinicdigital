import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const caseStudies = [
  {
    image: "/images/case-dermatology.jpg",
    category: "Dermatology",
    title: "Elevated Dermatology Group",
    description:
      "Deployed a full-funnel AI marketing system that automated lead capture, nurture sequences, and review management for a 5-location dermatology group.",
    results: [
      { metric: "New Patients/Month", value: "+127%" },
      { metric: "Response Time", value: "< 2 min" },
      { metric: "Google Reviews", value: "4.9 avg" },
    ],
    tags: ["Marketing Automation", "CRM", "Review Management"],
  },
  {
    image: "/images/case-medspa.jpg",
    category: "MedSpa",
    title: "Radiance Aesthetic Studio",
    description:
      "Built a GoHighLevel-powered booking and retention system with AI chatbots that handle consultations, upsells, and loyalty program management.",
    results: [
      { metric: "Bookings", value: "+85%" },
      { metric: "No-Show Rate", value: "-62%" },
      { metric: "Revenue Growth", value: "+210%" },
    ],
    tags: ["AI Chatbot", "Booking System", "Retention"],
  },
  {
    image: "/images/case-dental.jpg",
    category: "Dental",
    title: "SmileCraft Dental Partners",
    description:
      "Integrated AI-powered patient communication across SMS, email, and webchat, reducing front desk workload by 60% while improving patient satisfaction scores.",
    results: [
      { metric: "Staff Time Saved", value: "60%" },
      { metric: "Patient Satisfaction", value: "96%" },
      { metric: "Reactivations", value: "+340%" },
    ],
    tags: ["Virtual Assistant", "SMS Automation", "Integration"],
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Case Studies
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">Real results for real practices.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              See how our AI solutions have transformed operations and driven measurable growth for
              healthcare businesses.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground backdrop-blur-sm"
                  >
                    {study.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-xl font-semibold text-card-foreground">
                    {study.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {study.description}
                </p>

                {/* Results */}
                <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-secondary p-4">
                  {study.results.map((result) => (
                    <div key={result.metric} className="text-center">
                      <p className="font-heading text-lg font-bold text-primary">{result.value}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{result.metric}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
