import { UserPlus, Link2, Share2, Wallet } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up",
    description:
      "Complete a simple application form with your name, email, and how you plan to refer clients. Approval typically takes 24-48 hours.",
  },
  {
    icon: Link2,
    step: "02",
    title: "Get Your Link",
    description:
      "Receive a unique tracking link and access to your affiliate dashboard where you can monitor clicks, referrals, and earnings in real-time.",
  },
  {
    icon: Share2,
    step: "03",
    title: "Share & Refer",
    description:
      "Introduce ClinicDigital to your network via your link, email, social media, or direct introductions. We handle the sales process from there.",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Get Paid",
    description:
      "Earn 10% on project fees plus 10% monthly for as long as your referral remains a client. Payments are sent monthly via PayPal, Stripe, or bank transfer.",
  },
]

export function AffiliatesHowItWorks() {
  return (
    <section className="bg-foreground py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-background sm:text-4xl">
            <span className="text-balance">
              Start earning in 4 simple steps.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-background/60">
            No complicated setup. No technical skills required. Just share,
            refer, and earn.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="absolute left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] top-14 hidden h-px bg-background/20 lg:block" />

          {steps.map((step) => (
            <article
              key={step.step}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number circle */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-primary bg-foreground">
                <step.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Step label */}
              <span className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
                Step {step.step}
              </span>

              <h3 className="mt-2 font-heading text-lg font-semibold text-background">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-background/60">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
