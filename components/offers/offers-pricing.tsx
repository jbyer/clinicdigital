import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, TrendingUp, Crown } from "lucide-react"

const plans = [
  {
    name: "Local SEO Foundation",
    icon: Zap,
    price: 797,
    description:
      "Single-location practices establishing their local presence",
    features: [
      "Google Business Profile Optimization - Complete GBP setup and optimization",
      "Local Keyword Research - Target 10 primary local keywords ('dentist in [city]', 'chiropractor near me')",
      "Monthly Local Ranking Tracking - Monitor your map pack positions",
      "Basic Technical SEO Audit - Identify and fix critical site issues",
      "On-Page Optimization - Optimize up to 10 pages (meta titles, descriptions, headers, alt text)",
      "Google Search Console Integration - Track performance and fix indexing issues",
      "Google Analytics 4 Setup - Install and configure GA4 tracking",
      "Monthly SEO Report - Simple performance dashboard",
      "Schema Markup - Local business schema implementation",
      "Citation Building - 15 directory listings (Healthgrades, WebMD, Yelp, etc.)",
      "Review Monitoring - Track reviews across platforms",
      "Content Optimization - Optimize 1 blog post per month",

    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    icon: TrendingUp,
    price: 2997,
    description:
      "Our most popular plan for practices serious about dominating local search and driving a consistent flow of new patient appointments.",
    features: [
      "Everything in Starter, plus:",
      "Advanced technical SEO audit & fixes",
      "On-page SEO optimization (up to 25 pages)",
      "AI-powered blog content (4 articles/month)",
      "Service page copywriting & optimization",
      "Local citation building (50 citations)",
      "Automated review request system",
      "Google Ads management (up to $2k spend)",
      "Conversion rate optimization",
      "Bi-weekly strategy calls",
      "Real-time analytics dashboard",
    ],
    cta: "Start Growing",
    highlighted: true,
  },
  {
    name: "Dominate",
    icon: Crown,
    price: 4997,
    description:
      "The complete digital marketing command center for multi-location practices and medspas aiming for market leadership in their region.",
    features: [
      "Everything in Growth, plus:",
      "Unlimited page optimization",
      "AI blog content (8 articles/month)",
      "Full website design & development",
      "HIPAA-aware chatbot & lead capture",
      "Social media advertising management",
      "Patient journey CRM & automation",
      "Multi-location SEO strategy",
      "Competitor monitoring & alerts",
      "Dedicated healthcare marketing strategist",
      "Weekly strategy calls",
      "Priority support & same-day responses",
    ],
    cta: "Dominate Your Market",
    highlighted: false,
  },
]

export function OffersPricing() {
  return (
    <section id="pricing" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Pricing Plans
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Transparent pricing. Real healthcare marketing results.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Choose the plan that matches your growth ambitions. Every plan
            includes a dedicated team of healthcare marketing specialists
            focused entirely on growing your practice.
          </p>
        </div>

        {/* Price cards */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${plan.highlighted
                  ? "border-primary bg-background shadow-xl shadow-primary/10 ring-1 ring-primary"
                  : "border-border bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${plan.highlighted
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                    }`}
                >
                  <plan.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                </div>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading text-5xl font-extrabold tracking-tight text-foreground">
                  ${plan.price.toLocaleString()}
                </span>
                <span className="text-base text-muted-foreground">/mo</span>
              </div>

              {/* Minimum term note */}
              <p className="mt-1.5 text-xs font-medium text-muted-foreground">
                4-month minimum engagement
              </p>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              {/* CTA button */}
              <div className="mt-6">
                <Button
                  size="lg"
                  asChild
                  className={`w-full text-base ${plan.highlighted
                      ? "hover:bg-red-600 hover:text-background"
                      : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  variant={plan.highlighted ? "default" : "default"}
                >
                  <Link href="/book-a-call">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-border" />

              {/* Features list */}
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                {"What's included"}
              </p>
              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.highlighted ? "bg-primary/15" : "bg-accent/15"
                        }`}
                    >
                      <Check
                        className={`h-3 w-3 ${plan.highlighted ? "text-primary" : "text-accent"
                          }`}
                      />
                    </div>
                    <span className="text-sm leading-snug text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a{" "}
            <span className="font-semibold text-foreground">
              4-month minimum service term
            </span>{" "}
            to allow time for SEO strategies to deliver measurable results.
            Month-to-month thereafter.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Need a custom package?{" "}
            <Link
              href="/book-a-call"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Book a call
            </Link>{" "}
            and we{"'"}ll build a plan tailored to your practice.
          </p>
        </div>
      </div>
    </section>
  )
}
