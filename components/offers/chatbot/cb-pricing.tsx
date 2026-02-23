import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, TrendingUp, Crown } from "lucide-react"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    setupFee: 997,
    monthlyFee: 197,
    description:
      "A single-channel AI chatbot for practices ready to automate patient inquiries on their website and capture after-hours leads with intelligent conversation.",
    features: [
      "AI chatbot on your website",
      "Trained on your services, FAQs & policies",
      "Automated appointment booking",
      "Lead capture & contact form replacement",
      "Business-hours & after-hours messaging",
      "Basic lead qualification rules",
      "GoHighLevel CRM integration",
      "Conversation analytics dashboard",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    icon: TrendingUp,
    setupFee: 1997,
    monthlyFee: 397,
    description:
      "Our most popular package -- multi-channel AI chatbot with advanced qualification, automated follow-ups, and deep CRM workflows to maximize every patient interaction.",
    features: [
      "Everything in Starter, plus:",
      "Multi-channel: Website, SMS & Facebook",
      "Advanced lead qualification & scoring",
      "Automated SMS & email follow-up sequences",
      "Custom conversation flows per service line",
      "Provider-specific appointment routing",
      "Missed-call text-back automation",
      "Google Business Profile chat integration",
      "Review request triggers post-appointment",
      "Bi-weekly optimization & training updates",
      "Priority email & chat support",
    ],
    cta: "Deploy My AI Chatbot",
    highlighted: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    setupFee: 3997,
    monthlyFee: 697,
    description:
      "The full AI-powered patient communication suite for multi-location practices demanding premium automation, HIPAA-grade compliance, and dedicated strategic support.",
    features: [
      "Everything in Growth, plus:",
      "All channels: Website, SMS, FB, IG, Google",
      "Multi-location chatbot with smart routing",
      "HIPAA-compliant conversation handling",
      "Custom AI persona & brand voice training",
      "EHR / PMS integration via API or Zapier",
      "Advanced workflow automation & triggers",
      "Insurance verification conversation flows",
      "Dedicated account manager & strategist",
      "Weekly optimization & retraining sessions",
      "Phone & same-day priority support",
      "Quarterly AI performance audit",
    ],
    cta: "Launch Enterprise AI",
    highlighted: false,
  },
]

export function ChatbotPricing() {
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
              An AI employee that costs less than a part-time receptionist.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every plan includes a one-time setup fee for custom training,
            integration, and deployment, plus a monthly service fee for AI
            hosting, conversation credits, ongoing optimization, and support.
          </p>
        </div>

        {/* Price cards */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted
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
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    plan.highlighted
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
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-extrabold tracking-tight text-foreground">
                    ${plan.setupFee.toLocaleString()}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    one-time setup
                  </span>
                </div>
                {/* Monthly fee */}
                <div className="flex items-baseline gap-2 rounded-lg bg-muted/60 px-4 py-2.5">
                  <span className="text-lg font-bold text-foreground">
                    + ${plan.monthlyFee}
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
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
                  className={`w-full text-base ${
                    plan.highlighted
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
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? "bg-primary/15" : "bg-accent/15"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${
                          plan.highlighted ? "text-primary" : "text-accent"
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
            covering custom AI training, integration, and deployment, plus a{" "}
            <span className="font-semibold text-foreground">
              monthly service fee
            </span>{" "}
            for AI hosting, conversation credits, optimization, and support.{" "}
            <span className="font-semibold text-foreground">
              4-month minimum
            </span>{" "}
            -- month-to-month thereafter.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Need a custom AI solution?{" "}
            <Link
              href="/book-a-call"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Book a free consultation
            </Link>{" "}
            and we{"'"}ll build a chatbot tailored to your exact workflow.
          </p>
        </div>
      </div>
    </section>
  )
}
