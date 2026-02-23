import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Search } from "lucide-react"

const highlights = [
  "AI-powered local SEO for healthcare",
  "Done-for-you content & link building",
  "Transparent reporting & real results",
]

export function OffersHero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-offers-seo.jpg"
          alt="Modern medical practice with analytics dashboard on desktop monitor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20 lg:px-8">
        <div className="max-w-x1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <Search className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium tracking-wide uppercase text-primary-foreground/90">
              Healthcare SEO & Digital Marketing
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-balance">
              Rank Higher. Attract More Patients.{" "}
              <span className="text-primary">Grow Your Practice.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
            The all-in-one digital marketing platform built exclusively for
            medical practices and medspas. AI-driven SEO, content strategy,
            reputation management, and patient acquisition -- all under one
            roof.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="text-base hover:bg-red-600 hover:text-white"
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
              className="border-primary-foreground/20 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Highlight pills */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
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
