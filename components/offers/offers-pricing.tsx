import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, TrendingUp, Crown } from "lucide-react"

const plans = [
  {
    name: "Local SEO Foundation",
    icon: Zap,
    price: 797,
    description:
      "Perfect for: Single-location practices establishing their local presence",
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
    name: "Growth SEO Accelerator",
    icon: TrendingUp,
    price: 1497,
    description:
      "Perfect for: Growing practices ready to dominate local search",
    features: [
      "Everything in Foundation, PLUS:",
      "Expanded Keyword Tracking - 30 keywords monitored with local heatmap visualization",
      "Advanced Content Strategy - 2 SEO-optimized blog posts per month (AI-assisted with Content Genius)",
      "Competitor Analysis - Monthly tracking of top 3 competitors' rankings and backlinks",
      "Enhanced GBP Management - Weekly GBP post scheduling, Q&A management, photo uploads",
      "Link Building Campaign - 5 high-quality healthcare backlinks per month",
      "Local Citation Expansion - 40 directory listings + monthly audit",
      "On-Page Optimization - Optimize up to 25 pages",
      "Advanced Schema - FAQ schema, medical procedure schema, review schema",
      "Bi-Weekly Performance Reports - Detailed analytics dashboard",
      "Priority Email Support - Response within 24 hours",
    ],
    cta: "Start Growing",
    highlighted: true,
  },
  {
    name: "Enterprise SEO Domination",
    icon: Crown,
    price: 2997,
    description:
      "Perfect for: Multi-location practices or high-volume medspas dominating their market",
    features: [
      "Everything in Growth SEO Accelerator, plus:",
      "Full AI SEO Automation - Weekly automated optimizations across technical, on-page, and local SEO",
      "Unlimited Keyword Tracking - Track 100+ keywords with advanced SERP feature monitoring",
      "Multi-Location Management - Separate GBP optimization for up to 5 locations",
      "Aggressive Content Production - 4 SEO blog posts + 2 service pages per month",
      "Advanced Local SEO - Local heatmap tracking for multiple service areas",
      "Video SEO Optimization - YouTube and video schema optimization",
      "Monthly Strategy Calls - 60-minute optimization planning sessions",
      "Priority Phone Support - Same-day response guarantee",
      "Reputation Management - Automated review generation and response monitoring",
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
                    : "bg-foreground text-background hover:bg-red-600"
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
