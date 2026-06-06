import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    number: 1,
    title: "Website & Form Audit",
    description: "We analyze your site and identify where leads are getting lost or confused, then optimize for maximum capture.",
  },
  {
    number: 2,
    title: "Lead Magnet Setup",
    description: "Create high-converting lead magnets (like the Free Site Audit) that attract your ideal patient profile.",
  },
  {
    number: 3,
    title: "Workflow Automation",
    description: "Build multi-channel nurture sequences that automatically follow up via email, SMS, and social media.",
  },
  {
    number: 4,
    title: "Integration & Training",
    description: "Connect to your practice management system and train your team on using the new lead flow.",
  },
]

export function AcquisitionEngineProcess() {
  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-balance">
              How We Implement It
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A streamlined 4-step process to get your Acquisition Engine live and generating leads.
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
            Most practices see new leads appearing within 2 weeks
          </p>
          <Button size="lg" asChild className="hover:bg-red-600 hover:text-white">
            <Link href="/book-a-call">
              Get Started Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
