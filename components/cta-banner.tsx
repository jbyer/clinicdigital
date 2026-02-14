import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-14 lg:py-16">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-primary-foreground/5" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          <span className="text-balance">
            Stop losing patients to outdated workflows.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          Join 150+ practices already using AI-powered automation to fill their schedules, reduce
          no-shows, and scale revenue.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-base hover:bg-red-600 hover:text-white"
          >
            <Link href="/book-a-call">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
