import {
  Bot,
  Users,
  Target,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "Acquisition Engine",
    href: "/offers/acquisition-engine",
    description:
      "The complete lead capture and nurturing system. From smart forms and SEO visibility to automated marketing sequences, we ensure every qualified prospect is captured and converted into booked appointments.",
    features: ["Lead Capture & Scoring", "Multi-Channel Nurturing", "Local SEO & Visibility"],
  },
  {
    icon: Bot,
    title: "Front Desk Autopilot",
    href: "/offers/front-desk-autopilot",
    description:
      "24/7 patient engagement powered by AI. AI chatbots and voice assistants handle appointment booking, intake, and customer service around the clock—reducing no-shows and freeing your team for complex tasks.",
    features: ["AI Chatbots & Voice AI", "24/7 Appointment Booking", "Intelligent Call Answering"],
  },
  {
    icon: Users,
    title: "Lifetime Value System",
    href: "/offers/lifetime-value-system",
    description:
      "Transform one-time patients into lifelong loyalists. Modern website, maintenance, CRM management, and retention workflows keep your practice running smoothly and patients coming back.",
    features: ["Beautiful Modern Website", "Continuous Maintenance & Support", "Patient Retention CRM"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Solutions
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Three powerful systems to grow your practice.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We've bundled our AI solutions into 3 integrated packages that work together to attract, convert, and retain more patients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground mx-auto md:mx-0">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="font-heading text-xl font-semibold text-card-foreground">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
