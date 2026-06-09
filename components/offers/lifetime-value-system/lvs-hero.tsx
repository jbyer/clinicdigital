import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteAuditModal } from "@/components/site-audit-modal"
import { ArrowRight, CheckCircle2, Heart } from "lucide-react"

const highlights = [
  "Beautiful modern website",
  "Continuous updates & support",
  "Patient retention system",
]

export function LifetimeValueSystemHero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-offers-chatbot.jpg"
          alt="Modern medical practice website and patient retention dashboard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-6 pt-32 lg:px-8 lg:pt-36">
        <div className="max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <Heart className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium tracking-wide uppercase text-primary-foreground/90">
              Patient Retention & Infrastructure
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-balance">
              Turn Patients Into <span className="text-primary">Loyalists</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
            Modern website, continuous maintenance, and retention workflows that keep your practice running smoothly and patients coming back.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="text-base hover:bg-red-600 hover:text-white">
              <Link href="/book-a-call">
                Book A Call
              </Link>
            </Button>
            <SiteAuditModal>
              <Button size="lg" variant="outline" className="border-primary-foreground text-base hover:bg-red-600 hover:text-white">
                Get Free Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SiteAuditModal>
          </div>

          {/* Highlights */}
          <div className="mt-12 flex flex-wrap gap-6">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-primary-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
