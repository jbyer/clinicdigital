import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    number: 1,
    title: "Website Design & Development",
    description: "We create a beautiful, mobile-first website that showcases your practice and converts visitors into patients.",
  },
  {
    number: 2,
    title: "Retention System Setup",
    description: "Integrate your CRM, set up automated patient follow-ups, reminders, and loyalty program rules.",
  },
  {
    number: 3,
    title: "Monthly Maintenance & Support",
    description: "Regular updates, security monitoring, performance optimization, and technical support included every month.",
  },
  {
    number: 4,
    title: "Continuous Optimization",
    description: "We review analytics, gather patient feedback, and continuously improve your website and retention workflows.",
  },
]

export function LifetimeValueSystemProcess() {
  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-balance">
              Building Your Retention Engine
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A systematic approach to retention that spans website, systems, and ongoing optimization.
          </p>
        </div>

        <div className="grid gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute left-[3.25rem] w-1 h-12 bg-gradient-to-b from-primary/50 to-muted transform translate-y-12" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="text-lg font-semibold text-foreground mb-4">
            Ready to build your patient retention engine?
          </p>
          <Button size="lg" asChild className="hover:bg-red-600 hover:text-white">
            <Link href="/book-a-call">
              Start Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
