import {
  Target,
  Zap,
  DollarSign,
  Users,
  BarChart3,
  Globe,
  Clock,
  TrendingUp,
} from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Precision Audience Targeting",
    description:
      "We build custom audiences based on demographics, interests, behaviors, and location to reach potential patients actively seeking your services in your area.",
    highlights: [
      "Geo-targeted to your service area",
      "Interest & behavior targeting",
      "Lookalike audience expansion",
    ],
  },
  {
    icon: Zap,
    title: "Rapid Campaign Launch",
    description:
      "Your ad campaign goes live within 5-7 days. No lengthy onboarding, no endless strategy meetings -- just fast execution that starts generating leads quickly.",
    highlights: [
      "5-7 day setup to launch",
      "Pre-built healthcare templates",
      "Quick approval process",
    ],
  },
  {
    icon: Users,
    title: "High-Intent Lead Capture",
    description:
      "Ads are designed to capture patient information directly -- name, phone, email, and service interest. Leads go straight to your inbox or CRM for immediate follow-up.",
    highlights: [
      "Lead form integration",
      "Instant lead notifications",
      "CRM-ready contact data",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description:
      "See exactly how your campaign performs with real-time metrics: impressions, clicks, leads, and cost per lead. Know your ROI from day one.",
    highlights: [
      "Real-time analytics dashboard",
      "Cost per lead tracking",
      "Weekly performance reports",
    ],
  },
  {
    icon: Globe,
    title: "Multi-Platform Reach",
    description:
      "Run ads across Facebook, Instagram, TikTok and Google to maximize your reach. We select the platforms that perform best for your specific service and location.",
    highlights: [
      "Facebook, TikTok & Instagram ads",
      "Google Search & Display",
      "Platform optimization",
    ],
  },
  {
    icon: Clock,
    title: "4 Months Campaign Window",
    description:
      "Campaigns run for a focused 4 month period to generate a concentrated burst of leads. Perfect for filling your schedule, launching promotions, or testing new services.",
    highlights: [
      "Focused campaign duration",
      "Burst of new patient inquiries",
      "Ideal for promotions",
    ],
  },
  {
    icon: TrendingUp,
    title: "Optimized for Conversions",
    description:
      "We optimize campaigns for lead generation, not vanity metrics. Every dollar of your ad spend is focused on driving real patient inquiries, not just impressions.",
    highlights: [
      "Conversion-focused bidding",
      "A/B tested ad creative",
      "Continuous optimization",
    ],
  },
]

export function LeadGenAdsFeatures() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Campaign Features
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Ads-only lead generation. No fluff, just leads.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            This is a focused, ads-only service designed to drive new patient
            inquiries fast. No website redesigns, no SEO, no social media
            management -- just targeted ads that generate leads.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {feature.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
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
