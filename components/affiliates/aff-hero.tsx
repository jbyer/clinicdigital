import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Handshake } from "lucide-react"

const highlights = [
  "10% on every project",
  "10% monthly for life",
  "No caps or limits",
]

export function AffiliatesHero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden lg:min-h-[650px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-affiliates.jpg"
          alt="Business professionals partnering together"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-6 pt-32 lg:px-8 lg:pt-36">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <Handshake className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium uppercase tracking-wide text-primary-foreground/90">
              Partner Program
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              Earn While You Refer: <span className="text-primary">Partner with ClinicDigital</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
            Earn 10% on every project and 10% monthly for the lifetime of each
            client you refer. No caps. No limits. Build passive income by
            connecting healthcare practices with the growth solutions they need.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base hover:bg-red-600 hover:text-white">
              <Link href="#apply">
                Become an Affiliate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/20 bg-transparent text-base text-primary-foreground hover:bg-red-600"
            >
              <Link href="#calculator">Calculate Your Earnings</Link>
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

          <div className="mb-[50px] lg:mb-[30px]" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
