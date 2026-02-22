import {
  Search,
  FileText,
  MapPin,
  Star,
  TrendingUp,
  Globe,
  Megaphone,
  Bot,
} from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Healthcare SEO Strategy",
    description:
      "Comprehensive keyword research and on-page optimization tailored for medical specialties. We target high-intent, location-based search terms like 'dermatologist near me' and 'medspa treatments in [city]' to drive qualified patient traffic.",
    features: [
      "Medical keyword research",
      "On-page optimization",
      "Technical SEO audits",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    description:
      "Dominate the Google Local Pack and Maps for your service area. We optimize your Google Business Profile, build local citations, manage NAP consistency, and deploy geo-targeted strategies to capture patients searching nearby.",
    features: [
      "GBP optimization & posting",
      "Local citation building",
      "Geo-grid rank tracking",
    ],
  },
  {
    icon: FileText,
    title: "AI-Powered Content Marketing",
    description:
      "Authority-building blog content, service pages, and patient education resources created with AI-assisted workflows and reviewed by healthcare writers. Rank for hundreds of long-tail medical keywords.",
    features: [
      "SEO blog articles",
      "Service page copywriting",
      "Content calendar management",
    ],
  },
  {
    icon: Star,
    title: "Reputation Management",
    description:
      "Automate review requests, monitor patient feedback across platforms, and respond to reviews at scale. Build the 5-star reputation that drives new patients to choose your practice over competitors.",
    features: [
      "Automated review requests",
      "Multi-platform monitoring",
      "Response management",
    ],
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    description:
      "Turn website visitors into booked appointments with data-driven CRO. We optimize landing pages, call-to-action placements, booking flows, and mobile experiences to maximize your patient acquisition rate.",
    features: [
      "Landing page optimization",
      "A/B testing",
      "Booking funnel analysis",
    ],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "HIPAA-aware, mobile-first websites built for speed and conversion. Custom designs for medical practices and medspas that establish credibility and make it effortless for patients to book appointments.",
    features: [
      "Mobile-first responsive design",
      "Speed optimization",
      "ADA compliance guidance",
    ],
  },
  {
    icon: Megaphone,
    title: "Paid Search & Social Advertising",
    description:
      "Targeted Google Ads and social media campaigns that reach patients actively searching for your services. AI-optimized bidding and audience targeting to lower your cost-per-acquisition.",
    features: [
      "Google Ads management",
      "Social media advertising",
      "Retargeting campaigns",
    ],
  },
  {
    icon: Bot,
    title: "AI Chatbots & Lead Capture",
    description:
      "24/7 AI-powered virtual assistants that capture leads, answer patient questions, qualify inquiries, and book consultations while your front desk is closed. Never miss a patient opportunity.",
    features: [
      "24/7 lead capture",
      "Appointment scheduling",
      "Intelligent FAQ responses",
    ],
  },
]

export function OffersServices() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Everything your practice needs to dominate online.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From local SEO and content marketing to reputation management and
            AI-powered patient acquisition, we provide the complete digital
            marketing stack for healthcare providers.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-5 w-5" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
