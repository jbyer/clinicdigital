import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Mail,
  Phone,
  MapPin,
  Users,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About ClinicDigital.co | Your Healthcare Digital Partner",
  description:
    "Discover why healthcare practices trust ClinicDigital.co for web design, SEO, and digital marketing. Dedicated to bringing more patients to your door.",
  keywords: []
}

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every strategy we deploy is measured against real business outcomes. We track ROI, patient acquisition, and operational efficiency -- not vanity metrics.",
  },
  {
    icon: Heart,
    title: "Healthcare-First",
    description:
      "We understand HIPAA compliance, patient privacy, and the nuances of medical marketing. Healthcare is not a side vertical for us -- it is our entire focus.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve by continuously testing and adopting the latest AI and automation technologies, so your practice always has a competitive edge.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "No hidden fees, no black-box processes. We believe in clear communication, honest reporting, and building long-term partnerships with every client.",
  },
]

const milestones = [
  { year: "2019", title: "Founded", description: "ClinicDigital.co launched with a mission to bring enterprise-grade AI tools to independent medical practices." },
  { year: "2020", title: "First 25 Clients", description: "Onboarded our first cohort of dermatology and medspa clients, proving the model with measurable patient growth." },
  { year: "2023", title: "150+ Deployments", description: "Crossed 150 successful AI automation deployments across medical practices, medspas, and dental offices nationwide." },
  { year: "2025", title: "Expanding Horizons", description: "Launched SEO, web design, and website maintenance services to provide comprehensive digital growth for healthcare businesses." },
]

const stats = [
  { value: "150+", label: "Practices Served", icon: Users },
  { value: "6+", label: "Years in Business", icon: Clock },
  { value: "3.2x", label: "Avg. Client ROI", icon: TrendingUp },
  { value: "95%", label: "Client Retention Rate", icon: Award },
]

export default function AboutUsPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-about.jpg"
            alt="ClinicDigital team collaborating in a modern office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20 lg:px-8">
          <div className="max-w-x1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
              <Users className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium uppercase tracking-wide text-primary-foreground/90">
                About Us
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                The AI Agency Built Exclusively for{" "}
                <span className="text-primary">Healthcare</span>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
              We are a team of healthcare technologists, marketers, and AI
              specialists on a mission to help medical practices and medspas
              grow smarter with intelligent automation.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="text-base hover:bg-red-600 hover:text-white">
                <Link href="/book-a-call">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 bg-transparent text-base text-primary-foreground hover:bg-red-600"
              >
                <Link href="/#services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <stat.icon className="mb-2 h-6 w-6 text-primary" />
                <p className="font-heading text-3xl font-bold text-background lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-background/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Mission
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <span className="text-balance">
                  Empowering practices to thrive with intelligent automation
                </span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                ClinicDigital.co was born from a simple observation: independent
                medical practices and medspas deserve the same powerful AI and
                marketing automation tools that large hospital systems enjoy --
                without the enterprise price tag or complexity.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our founders combined their expertise in healthcare technology,
                clinical operations, and artificial intelligence to create an
                agency laser-focused on one industry. We do not dabble in
                restaurants, real estate, or retail. Healthcare is our entire
                world, and that specialization means better outcomes for every
                client.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Leveraging various AI platforms, we deploy
                custom AI automations that handle everything from patient
                acquisition and appointment scheduling to reputation management
                and long-term retention -- all tailored to the unique compliance
                requirements and growth levers of the healthcare industry.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-border lg:left-5" />
              <div className="flex flex-col gap-8">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative flex gap-6 pl-12 lg:pl-14">
                    <div className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-background lg:h-10 lg:w-10">
                      <span className="text-xs font-bold text-primary">{milestone.year.slice(2)}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {milestone.year}
                      </p>
                      <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Values
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">What drives everything we do</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="bg-secondary py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Email Us</p>
                <a
                  href="mailto:info@clinicdigital.co"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  info@clinicdigital.co
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Call Us</p>
                <a
                  href="tel:+18555800608"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  (855) 580-0608
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">
                  Remote-first with teams across the US
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-14 lg:py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-foreground" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Zap className="mx-auto mb-4 h-8 w-8 text-accent" />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to grow your practice with AI?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Book a free 30-minute strategy session. We will analyze your
            current operations and show you exactly how AI automation can
            drive measurable growth.
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
              className="border-primary-foreground/20 bg-transparent text-base text-primary-foreground hover:bg-red-600 "
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
