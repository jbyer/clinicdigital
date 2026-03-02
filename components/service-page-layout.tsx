import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Zap } from "lucide-react"

interface ServiceFeature {
  icon: ReactNode
  title: string
  description: string
}

interface ServicePageLayoutProps {
  badge: string
  title: string
  titleAccent: string
  subtitle: string
  heroImage: string
  heroImageAlt: string
  icon: ReactNode
  features: ServiceFeature[]
  benefits: string[]
  ctaHeading: string
  ctaDescription: string
  children?: ReactNode
}

export function ServicePageLayout({
  badge,
  title,
  titleAccent,
  subtitle,
  heroImage,
  heroImageAlt,
  icon,
  features,
  benefits,
  ctaHeading,
  ctaDescription,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20 lg:px-8">
          <div className="max-w-x1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
              {icon}
              <span className="text-xs font-medium uppercase tracking-wide text-primary-foreground/90">
                {badge}
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                {title}{" "}
                <span className="text-primary">{titleAccent}</span>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="text-base hover:bg-red-600 hover:text-white">
                <Link href="/book-a-call">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 bg-transparent text-base text-primary-foreground hover:bg-red-600"
              >
                <Link href="/#services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Key Features
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">What you get with this service</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Why Choose Us
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <span className="text-balance">
                  Built specifically for medical practices and medspas
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We understand the unique challenges healthcare businesses face. Our solutions are
                tailored to your industry, your patients, and your growth goals.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-base leading-relaxed text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Optional extra content */}
      {children}

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-14 lg:py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-foreground" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Zap className="mx-auto mb-4 h-8 w-8 text-accent" />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {ctaHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            {ctaDescription}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-primary-foreground text-primary hover:bg-red-600 hover:text-white text-base font-semibold"
            >
              <Link href="/book-a-call">Book a Free Strategy Call</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/20 bg-transparent text-base text-primary-foreground hover:bg-red-600"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
