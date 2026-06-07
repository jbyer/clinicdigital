import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SiteAuditModal } from "@/components/site-audit-modal"
import {
  ArrowRight,
  Megaphone,
  Users,
  Bot,
  CalendarCheck,
  Search,
  Wrench,
  Palette,
  Target,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Other Services | À La Carte Digital Solutions | ClinicDigital.co",
  description:
    "Buy individual services without a package. Lead generation, AI marketing automation, CRM, AI chatbots, Voice AI, appointment automation, SEO, website maintenance, and web design for healthcare practices.",
  keywords: [
    "individual services",
    "à la carte marketing",
    "healthcare SEO",
    "AI chatbots",
    "voice AI",
    "web design",
  ],
}

const services = [
  {
    icon: Target,
    title: "Lead Generation",
    href: "/services/lead-generation",
    description:
      "Capture and convert more high-value patient leads with smart forms, automated follow-ups, and multi-channel nurturing that turns visitors into booked appointments.",
  },
  {
    icon: Megaphone,
    title: "AI Marketing Automation",
    href: "/services/ai-marketing-automation",
    description:
      "Automated email campaigns, SMS sequences, and social outreach powered by AI—reaching the right patients at the right time with personalized messaging.",
  },
  {
    icon: Users,
    title: "Client Management (CRM)",
    href: "/services/client-management",
    description:
      "A unified CRM built for healthcare. Track patient journeys, automate follow-ups, and manage relationships from first inquiry to long-term retention.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    href: "/services/ai-chatbots",
    description:
      "24/7 AI assistants that handle appointment booking, FAQ responses, and lead qualification—reducing staff workload while elevating patient experience.",
  },
  {
    icon: Phone,
    title: "Voice AI",
    href: "/services/voice-ai",
    description:
      "Intelligent voice assistants that answer calls, book appointments, and qualify leads with natural conversation. Never miss a patient call again, even after hours.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Automation",
    href: "/services/appointment-automation",
    description:
      "Eliminate no-shows with intelligent scheduling, automated reminders, and self-service booking—seamlessly integrated with your practice management systems.",
  },
  {
    icon: Search,
    title: "SEO",
    href: "/services/seo",
    description:
      "Dominate local search results and attract high-intent patients with data-driven SEO strategies tailored for medical practices and medspas.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    href: "/services/website-maintenance",
    description:
      "Keep your practice website secure, fast, and up-to-date. We handle updates, backups, speed optimization, and ongoing technical support.",
  },
  {
    icon: Palette,
    title: "Web Design",
    href: "/services/web-design",
    description:
      "Custom, conversion-focused websites designed specifically for healthcare and medspa brands—beautiful, mobile-first experiences that turn visitors into patients.",
  },
]

export default function OtherServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Other Services
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                Individual services, available à la carte
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
              Not ready for a full package? Pick exactly what your practice
              needs. Each service below can be purchased on its own—no bundle
              required.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h2 className="font-heading text-xl font-semibold text-card-foreground">
                    {service.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-border pt-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted/40 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">
                Not sure which service is right for you?
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Get a free site audit and we&apos;ll show you exactly where your
              practice is losing leads—and which service will move the needle
              fastest.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <SiteAuditModal>
                <Button size="lg" className="hover:bg-red-600 hover:text-white">
                  Get Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SiteAuditModal>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-red-600 hover:text-white"
              >
                <Link href="/book-a-call">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
