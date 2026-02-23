import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const highlights = [
  "AI-powered local SEO for healthcare",
  "Done-for-you content & link building",
  "Transparent reporting & real results",
]

export function OffersHero() {
  return (
    <section className="relative h-[550px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-offers-seo.jpg"
          alt="Modern medical practice with analytics dashboard showing search engine rankings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm">
            Healthcare SEO & Digital Marketing
          </p>

          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              Rank Higher. Attract More Patients.{" "}
              <span className="text-primary">Grow Your Practice.</span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 lg:text-xl">
            The all-in-one digital marketing platform built exclusively for
            medical practices and medspas. AI-driven SEO, content strategy,
            reputation management, and patient acquisition -- all under one
            roof.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              asChild
              className="text-base hover:bg-red-600 hover:text-primary-foreground"
            >
              <Link href="/book-a-call">
                Get Your Free SEO Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/20 bg-transparent text-base text-primary-foreground hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
            >
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Highlight pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-primary-foreground/60"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
