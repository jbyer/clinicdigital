import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    number: 1,
    title: "AI Assistant Training",
    description: "We train your AI chatbot and voice assistant on your services, policies, and FAQs so it handles 80% of routine requests.",
  },
  {
    number: 2,
    title: "Integration Setup",
    description: "Connect the AI to your practice management system and calendar so appointments sync automatically.",
  },
  {
    number: 3,
    title: "Go Live & Monitor",
    description: "Your AI front desk goes live and starts handling calls and chats. We monitor performance and optimize conversations.",
  },
  {
    number: 4,
    title: "Continuous Improvement",
    description: "We review call transcripts and patient feedback monthly, updating the AI to handle new scenarios and edge cases.",
  },
]

export function FrontDeskAutopilotProcess() {
  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-balance">
              Implementation Timeline
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From kickoff to live in 3-4 weeks, with full support and optimization included.
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
            Your AI front desk pays for itself within 2 months
          </p>
          <Button size="lg" asChild className="hover:bg-red-600 hover:text-white">
            <Link href="/book-a-call">
              Schedule Demo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
