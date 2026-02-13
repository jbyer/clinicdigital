import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowDown,
  CalendarCheck,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Book A Call | ClinicDigital.co",
  description:
    "Schedule a free strategy session with ClinicDigital.co. Discover how AI-powered automation can streamline your medical practice or medspa operations.",
}

const benefits = [
  "Personalized AI strategy for your practice",
  "GoHighLevel platform walkthrough",
  "Marketing automation opportunities",
  "ROI projections for your niche",
  "No obligation, 100% free consultation",
]

const steps = [
  {
    number: "01",
    title: "Pick a Time",
    description: "Choose a 30-minute slot that fits your schedule from the calendar below.",
  },
  {
    number: "02",
    title: "Tell Us About You",
    description: "Share a few details about your practice so we can tailor the conversation.",
  },
  {
    number: "03",
    title: "Get Your Strategy",
    description: "Receive a custom AI roadmap with clear next steps for your growth.",
  },
]

export default function BookACallPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden lg:min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-book-a-call.jpg"
            alt="Professional medical consultation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 pt-20 lg:min-h-[60vh] lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
              <CalendarCheck className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium uppercase tracking-wide text-primary-foreground/90">
                Free 30-Minute Strategy Session
              </span>
            </div>

            <h1 className="mt-[100px] font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                Book a Call With{" "}
                <span className="text-primary">Our Team</span>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
              Discover how AI-powered automation through GoHighLevel can transform your medical
              practice or medspa. Pick a time, and we will handle the rest.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="text-base hover:bg-red-600 hover:text-white">
                <a href="#booking-calendar">
                  Schedule Now
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-primary-foreground/10 pt-8">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/60">100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/60">30 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/60">No Obligation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* How It Works Mini-Steps */}
      <section className="bg-secondary py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-secondary-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="booking-calendar" className="scroll-mt-20 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: Info Column */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                What to Expect
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                <span className="text-balance">
                  Your Personalized AI Growth Strategy
                </span>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                In this 30-minute call, we will review your current operations and show you exactly
                how our AI solutions can save time, increase bookings, and grow your bottom line.
              </p>

              {/* Benefits */}
              <ul className="mt-8 flex flex-col gap-3.5">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-10 flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Duration</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">30 minutes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      <a
                        href="mailto:info@clinicdigital.co"
                        className="transition-colors hover:text-primary"
                      >
                        info@clinicdigital.co
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      <a
                        href="tel:+18555800608"
                        className="transition-colors hover:text-primary"
                      >
                        (855) 580-0608
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Location</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      Remote-first with teams across the US
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-10 rounded-2xl border border-border bg-card p-6">
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                  {
                    "\"ClinicDigital completely transformed how we manage patient inquiries. Our booking rate jumped 85% in the first three months, and we haven't looked back.\""
                  }
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-bold text-primary">JM</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">
                      Dr. Jessica Monroe
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Owner, Radiance Aesthetic Studio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Calendar */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8">
                <h3 className="font-heading text-xl font-semibold text-card-foreground">
                  Select a Date & Time
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pick a time that works for you and we will handle the rest.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <iframe
                    src="https://brand.clinicdigital.co/widget/booking/21QEzBNbB5RyfvyaVrxh"
                    title="ClinicDigital.co Booking Calendar"
                    style={{ width: "100%", border: "none", overflow: "hidden" }}
                    scrolling="no"
                    className="min-h-[600px] sm:min-h-[650px]"
                    loading="lazy"
                    allow="payment"
                    id="book-a-call-calendar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Script
        src="https://brand.clinicdigital.co/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  )
}
