import {
  Infinity,
  TrendingUp,
  LayoutDashboard,
  FileText,
  Headphones,
  Zap,
} from "lucide-react"

const benefits = [
  {
    icon: Infinity,
    title: "Lifetime Commissions",
    description:
      "Earn every month as long as your referral stays a client. No sunset clauses or commission caps.",
  },
  {
    icon: TrendingUp,
    title: "No Earnings Cap",
    description:
      "Unlimited referrals, unlimited earnings. The more you refer, the more you earn — simple as that.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-Time Dashboard",
    description:
      "Track clicks, referrals, conversions, and payments 24/7 with your dedicated affiliate dashboard.",
  },
  {
    icon: FileText,
    title: "Marketing Materials",
    description:
      "Access email templates, social graphics, talking points, and case studies to help you refer.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Direct line to our affiliate manager for questions, custom campaigns, or high-value referrals.",
  },
  {
    icon: Zap,
    title: "Fast Payouts",
    description:
      "Monthly payments via PayPal, Stripe, or bank transfer. Low $50 minimum threshold.",
  },
]

export function AffiliatesBenefits() {
  return (
    <section className="bg-foreground py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Affiliate Benefits
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-background sm:text-4xl">
            <span className="text-balance">
              Everything you need to succeed.
            </span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-background">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/60">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
