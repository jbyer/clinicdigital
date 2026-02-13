import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react"

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

export default function BookACallPage() {
  return (
    <>
      <Navigation />

      {/* Hero Banner */}
      <section className="bg-foreground py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Free Strategy Session
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Book a Call With Our Team
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-background/60">
            Discover how AI-powered automation through GoHighLevel can transform your medical
            practice or medspa. Pick a time that works for you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: Info Column */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                {"What to Expect"}
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
                      <a href="mailto:info@clinicdigital.co" className="transition-colors hover:text-primary">
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
                      <a href="tel:+18555800608" className="transition-colors hover:text-primary">
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
                    <p className="text-sm font-semibold text-card-foreground">Dr. Jessica Monroe</p>
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
