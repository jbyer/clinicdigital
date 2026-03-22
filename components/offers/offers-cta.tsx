import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function OffersCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-20">
      {/* Decorative */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-primary-foreground/5" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          <span className="text-balance">
            Ready to fill your schedule with high-value patients?
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          Get a free, no-obligation SEO audit and custom growth strategy for
          your practice. See exactly where you stand and how we can help you
          rank, attract, and convert more patients.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-base hover:bg-red-600 hover:text-background"
          >
            <Link href="/book-a-call">
              Book Your Free SEO Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground/30 bg-transparent text-base text-primary-foreground hover:bg-red-600"
          >
            <Link href="tel:+1234567890">
              <Phone className="mr-2 h-4 w-4" />
              Call Us Now
            </Link>
          </Button>
        </div>


      </div>
    </section>
  )
}
