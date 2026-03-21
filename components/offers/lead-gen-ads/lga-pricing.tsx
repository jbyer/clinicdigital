import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, TrendingUp, Crown } from "lucide-react"

const plans = [
  {
    name: "Local Pulse",
    icon: Zap,
    price: 1497 / mo,
    duration: "3 weeks",
    description:
      "Perfect for single-location practices ready to grow",
    features: [
      "Google Ads setup & management",
      "Facebook/Instagram Ads",
      "Google Business Profile optimization",
      "HIPAA-compliant landing page",
      "Custom CRM setup",
      "Lead capture & auto-response",
      "Monthly performance report",
      "Email + SMS lead nurture (3-step)",
      "Reputation monitoring",
    ],
    recommended: "$900 - $1500 ad spend",
    cta: "Start Local Pulse Campaign",
    highlighted: false,
  },
  {
    name: "Growth Campaign",
    icon: TrendingUp,
    price: 513,
    duration: "4 weeks",
    description:
      "Best for practices ready to generate a consistent flow of new patient leads",
    features: [
      "Multi-platform (Facebook + Instagram + Google)",
      "Up to 3 target services or promotions",
      "Advanced audience targeting & retargeting",
      "4 ad variations with ongoing optimization",
      "Lead capture with instant email notifications",
      "CRM integration (if using ClinicDigital CRM)",
      "Weekly performance check-ins",
      "Mid-campaign optimization adjustments",
      "Detailed end-of-campaign report with insights",
      "You control your own ad spend budget",
    ],
    recommended: "$2700 ad spend",
    cta: "Launch Growth Campaign",
    highlighted: true,
  },
  {
    name: "Blitz Campaign",
    icon: Crown,
    price: 1296,
    duration: "4 weeks",
    description:
      "Ideal for grand openings, new service launches, or aggressive growth goals",
    features: [
      "All platforms (Facebook, Instagram, TikTok, Google Search & Display)",
      "Unlimited services or promotions",
      "Hyper-targeted custom & lookalike audiences",
      "6+ ad variations with aggressive testing",
      "Video ad creation included (1 short-form video)",
      "Landing page optimization recommendations",
      "Priority campaign launch (3-5 days)",
      "Twice-weekly optimization & reporting",
      "Competitor analysis & positioning",
      "Post-campaign strategy recommendations",
      "You control your own ad spend budget",
    ],
    recommended: "$7200 ad spend",
    cta: "Launch Blitz Campaign",
    highlighted: false,
  },
]

export function LeadGenAdsPricing() {
  return (
    <section id="pricing" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Campaign Pricing
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              One-time setup. No monthly fees. You control ad spend.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Pay once for campaign setup and creative. Your ad spend goes
            directly to Facebook/Google -- we never mark it up or take a cut.
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
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
              </div>

              {/* Pricing */}
              <div className="mt-6 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-extrabold tracking-tight text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    one-time
                  </span>
                </div>
                <div className="flex items-baseline gap-2 rounded-lg bg-muted/60 px-4 py-2.5">
                  <span className="text-lg font-bold text-foreground">
                    {plan.duration}
                  </span>
                  <span className="text-sm text-muted-foreground">campaign duration</span>
                </div>
              </div>

              {/* Recommended ad spend */}
              <p className="mt-2 text-xs font-medium text-primary">
                Recommended ad spend: {plan.recommended}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              {/* CTA */}
              <div className="mt-6">
                <Button
                  size="lg"
                  asChild
                  className={`w-full text-base ${plan.highlighted
                    ? "hover:bg-red-600 hover:text-background"
                    : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                >
                  <Link href="/book-a-call">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-border" />

              {/* Features */}
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
            <span className="font-semibold text-foreground">
              Important:
            </span>{" "}
            These prices cover campaign setup, creative, targeting, and optimization only.{" "}
            <span className="font-semibold text-foreground">
              Ad spend is separate
            </span>{" "}
            and paid directly to Facebook/Google. You maintain full control of your ad account and budget.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Need a longer campaign or custom scope?{" "}
            <Link
              href="/book-a-call"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Book a free consultation
            </Link>{" "}
            and we{"'"}ll build a custom campaign for your goals.
          </p>
        </div>
      </div>
    </section>
  )
}
