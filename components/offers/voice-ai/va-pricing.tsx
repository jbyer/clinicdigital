import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, TrendingUp, Crown } from "lucide-react"

const plans = [
  {
    name: "Starter Voice AI",
    icon: Zap,
    setupFee: 497,
    monthlyFee: 297,
    description:
      "Perfect for small practices ready to stop missing calls",
    features: [
      "AI Voice Agent for inbound calls",
      "50 minutes of AI call time included",
      "24/7 Availability - Never miss a patient call",
      "Basic FAQ Handling - Answers common questions (hours, location, services)",
      "Appointment Request Capture - Collects info and sends to your staff",
      "Voicemail Transcription - AI transcribes all voicemails",
      "Call Notifications - Real-time alerts for every call",
      "Basic Call Analytics - Track call volume and outcomes",
      "HIPAA-Aware call handling",
      "Business Hours Routing - Custom handling for after-hours",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional Voice AI",
    icon: TrendingUp,
    setupFee: 997,
    monthlyFee: 797,
    description:
      "For growing practices ready to automate patient acquisition",
    features: [
      "Everything in Starter Voice AI plan",
      "150 minutes of AI call time included",
      "Direct Calendar Integration - Patients book appointments on the call",
      "Automated Confirmations - SMS & email sent after booking",
      "Lead Qualification - Pre-screens callers based on your criteria",
      "Call Transfer to Staff - Seamless handoff for complex inquiries",
      "Multi-Location Routing - Route calls based on caller location",
      "Custom Voice Persona - Adjust tone, pace, and personality",
      "CRM Integration - All call data syncs to your CRM",
      "Missed Call Text-Back - Automatic SMS when calls are missed",
      "Weekly Call Reports - Detailed analytics delivered to your inbox",
      "Priority Support - Email & chat support within 24 hours",
    ],
    cta: "Deploy My Voice AI",
    highlighted: true,
  },
  {
    name: "Enterprise Voice AI",
    icon: Crown,
    setupFee: 1997,
    monthlyFee: 1297,
    description:
      "For multi-location practices or high-volume clinics",
    features: [
      "Everything in Professional Voice AI plan",
      "500 minutes of AI call time included",
      "Multi-Location Support - Separate voice agents per location",
      "Outbound Call Campaigns - AI makes appointment reminder calls",
      "No-Show Follow-Up - Automatic calls to reschedule missed appointments",
      "Review Generation - AI requests reviews after appointments",
      "Advanced Call Routing - Route by department, provider, or urgency",
      "Custom Integrations - Connect to your EHR/PMS via API",
      "White-Label Option - Remove branding from caller experience",
      "Dedicated Account Manager - Your personal success partner",
      "Monthly Strategy Reviews - Optimization sessions with our team",
      "Same-Day Priority Support - Phone & chat support",
    ],
    cta: "Launch Enterprise Voice AI",
    highlighted: false,
  },
]

export function VoiceAIPricing() {
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
              An AI receptionist for less than minimum wage.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every plan includes a one-time setup fee for custom voice training,
            integration, and deployment, plus a monthly service fee for AI
            hosting, call minutes, ongoing optimization, and support.
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
            covering custom voice training, integration, and deployment, plus a{" "}
            <span className="font-semibold text-foreground">
              monthly service fee
            </span>{" "}
            for AI hosting, call minutes, optimization, and support.{" "}
            <span className="font-semibold text-foreground">
              4-month minimum
            </span>{" "}
            -- month-to-month thereafter.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Need a custom Voice AI solution?{" "}
            <Link
              href="/book-a-call"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Book a free consultation
            </Link>{" "}
            and we{"'"}ll build a voice agent tailored to your exact workflow.
          </p>
        </div>
      </div>
    </section>
  )
}
