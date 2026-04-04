import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles, Rocket, Gem } from "lucide-react"

const plans = [
  {
    name: "Essential Maintenance",
    icon: Sparkles,
    price: 197,
    description:
      "Basic maintenance for simple websites that need security updates, backups, and uptime monitoring without the bells and whistles.",
    features: [
      "Monthly software & plugin updates",
      "Monthly automated backups",
      "24/7 uptime monitoring",
      "SSL certificate management",
      "Monthly security scans",
      "Up to 1 hour content edits/month",
      "Email support (48hr response)",
    ],
    cta: "Get Essential",
    highlighted: false,
    payment: "https://buy.stripe.com/8x214fePL6LAblJ7zV1ck06",
  },
  {
    name: "Professional Maintenance",
    icon: Rocket,
    price: 297,
    description:
      "Comprehensive maintenance for practices that want proactive optimization, faster support, and regular performance improvements.",
    features: [
      "Everything in Essential, plus:",
      "Bi-weekly updates & monitoring",
      "Real-time security monitoring",
      "Performance optimization (monthly)",
      "Database cleanup & optimization",
      "Up to 5 hours content edits/month",
      "Priority email & phone support (24hr)",
      "Monthly performance reports",
    ],
    cta: "Get Professional",
    highlighted: true,
    payment: "https://buy.stripe.com/fZudR16jf5Hw0H54nJ1ck07",
  },
  {
    name: "Premium Maintenance",
    icon: Gem,
    price: 497,
    description:
      "White-glove maintenance for high-traffic or complex websites requiring dedicated attention, same-day support, and unlimited edits.",
    features: [
      "Everything in Professional, plus:",
      "Weekly updates & monitoring",
      "Advanced malware protection",
      "CDN & caching optimization",
      "Unlimited content edits",
      "Same-day emergency support",
      "Dedicated account manager",
      "Quarterly strategy calls",
      "Priority development queue",
    ],
    cta: "Get Premium",
    highlighted: false,
    payment: "https://buy.stripe.com/14AfZ9fTP8TI3Th4nJ1ck08",
  },
]

export function MaintenancePricing() {
  return (
    <section id="pricing" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Maintenance Plans
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Simple, predictable pricing for peace of mind.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Choose the maintenance plan that fits your practice. All plans
            include our core services -- just pick the level of support and
            optimization you need.
          </p>
        </div>

        {/* Price cards */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-5 transition-all duration-300 sm:p-8 ${plan.highlighted
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
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                    ${plan.price}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                    /month
                  </span>
                </div>
              </div>

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
                  <Link href="">
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
            All plans are{" "}
            <span className="font-semibold text-foreground">
              month-to-month
            </span>{" "}
            with no long-term contracts. Cancel anytime with 30 days notice.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Not sure which plan is right for you?{" "}
            <Link
              href="/book-a-call"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Book a free consultation
            </Link>{" "}
            and we{"'"}ll help you choose.
          </p>
        </div>
      </div>
    </section>
  )
}
