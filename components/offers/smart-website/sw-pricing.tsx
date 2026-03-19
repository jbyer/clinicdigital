import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, TrendingUp, Crown } from "lucide-react"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    setupFee: 1500,
    monthlyFee: 297,
    description:
      "A polished, conversion-focused website for single-location practices ready to establish a powerful online presence and start booking patients online.",
    features: [
      "Custom 5-page responsive website",
      "Mobile-first design & development",
      "Built-in SEO (meta tags, schema, sitemap)",
      "Click-to-call & tap-to-book buttons",
      "Contact & appointment request forms",
      "Google Analytics & Tag Manager setup",
      "SSL certificate & security setup",
      "Monthly hosting & maintenance",
      "1 round of design revisions post-launch",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    icon: TrendingUp,
    setupFee: 2500,
    monthlyFee: 497,
    description:
      "Our most popular package for practices that want a full Smart Website experience -- AI chatbot, patient intake automation, CRM, and conversion funnels built in.",
    features: [
      "Everything in Essential, plus:",
      "Custom 10-page website with service pages",
      "AI chatbot & virtual assistant (24/7)",
      "Smart patient intake forms with logic flows",
      "CRM integration & lead pipeline setup",
      "Conversion-optimized booking funnels",
      "Automated email & SMS follow-up sequences",
      "Reputation widget (Google reviews display)",
      "Blog setup with 2 SEO articles",
      "ADA accessibility guidance",
      "Bi-weekly support & optimization calls",
    ],
    cta: "Build My Smart Website",
    highlighted: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    setupFee: 5500,
    monthlyFee: 797,
    description:
      "The complete digital command center for multi-location practices and medspas demanding a premium online experience with full automation and ongoing growth.",
    features: [
      "Everything in Professional, plus:",
      "Unlimited pages & service locations",
      "Advanced AI chatbot with appointment booking",
      "Multi-location intake & routing logic",
      "Patient journey CRM & automation workflows",
      "E-commerce for product sales (if applicable)",
      "Custom landing pages for ad campaigns",
      "Monthly SEO blog content (4 articles)",
      "Video integration & virtual tour support",
      "Dedicated project manager & strategist",
      "Priority support & same-day responses",
      "Quarterly UX audit & conversion optimization",
    ],
    cta: "Launch My Enterprise Site",
    highlighted: false,
  },
]

export function SmartWebsitePricing() {
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
              Invest in a website that actually pays for itself.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every plan includes a one-time setup fee for custom design and
            development, plus a monthly service fee for hosting, maintenance,
            AI tools, and ongoing optimization.
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

              {/* Pricing -- setup + monthly */}
              <div className="mt-6 space-y-3">
                {/* Setup fee */}
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                    ${plan.setupFee.toLocaleString()}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                    one-time setup
                  </span>
                </div>
                {/* Monthly fee */}
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 rounded-lg bg-muted/60 px-3 py-2 sm:px-4 sm:py-2.5">
                  <span className="text-base font-bold text-foreground sm:text-lg">
                    + ${plan.monthlyFee}
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">/month</span>
                </div>
              </div>

              {/* Term note */}
              <p className="mt-2 text-xs font-medium text-muted-foreground">
                4-month minimum service term
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
            All plans include a{" "}
            <span className="font-semibold text-foreground">
              one-time setup fee
            </span>{" "}
            covering custom design, development, and launch, plus a{" "}
            <span className="font-semibold text-foreground">
              monthly service fee
            </span>{" "}
            for hosting, AI tools, maintenance, and optimization.{" "}
            <span className="font-semibold text-foreground">
              4-month minimum
            </span>{" "}
            -- month-to-month thereafter.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Need something custom?{" "}
            <Link
              href="/book-a-call"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Book a free consultation
            </Link>{" "}
            and we{"'"}ll tailor a Smart Website to your exact needs.
          </p>
        </div>
      </div>
    </section>
  )
}
