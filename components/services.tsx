import {
  Bot,
  Users,
  Megaphone,
  Search,
  Wrench,
  Palette,
  CalendarCheck,
  ArrowRight,
  Phone,
  Target,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "Lead Generation",
    href: "/services/lead-generation",
    description:
      "Capture and convert more high-value patient leads with smart forms, automated follow-ups, and multi-channel nurturing. Turn website visitors into booked appointments.",
    features: ["Smart Lead Capture Forms", "Automated Follow-Up", "Lead Scoring & Qualification"],
  },
  {
    icon: Megaphone,
    title: "AI Marketing Automation",
    href: "/services/ai-marketing-automation",
    description:
      "Automated email campaigns, SMS sequences, and social media outreach powered by AI. Reach the right patients at the right time with personalized messaging that converts.",
    features: ["Smart Email Sequences", "AI-Powered SMS Campaigns", "Social Media Automation"],
  },
  {
    icon: Users,
    title: "Client Management (CRM)",
    href: "/services/client-management",
    description:
      "A unified CRM built for healthcare. Track patient journeys, automate follow-ups, and manage relationships from first inquiry to long-term retention.",
    features: ["Patient Pipeline Tracking", "Automated Follow-Ups", "Retention Workflows"],
  },
  {
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    href: "/services/ai-chatbots",
    description:
      "24/7 AI assistants that handle appointment booking, FAQ responses, and lead qualification. Reduce staff workload while maintaining an exceptional patient experience.",
    features: ["24/7 Lead Capture", "Appointment Scheduling", "Intelligent FAQ Responses"],
  },
  {
    icon: Phone,
    title: "Voice AI",
    href: "/services/voice-ai",
    description:
      "Intelligent voice assistants that answer calls, book appointments, and qualify leads with natural conversation. Never miss a patient call again, even after hours.",
    features: ["24/7 Call Answering", "Voice-Based Booking", "Natural Conversations"],
  },
  {
    icon: CalendarCheck,
    title: "Appointment Automation",
    href: "/services/appointment-automation",
    description:
      "Eliminate no-shows with intelligent scheduling, automated reminders, and self-service booking. Seamlessly integrated with your existing practice management systems.",
    features: ["Online Self-Booking", "Smart Reminders", "Calendar Sync"],
  },
  {
    icon: Search,
    title: "SEO",
    href: "/services/seo",
    description:
      "Dominate local search results and attract high-intent patients with data-driven SEO strategies tailored for medical practices and medspas. We optimize every page to rank where it matters most.",
    features: ["Local SEO & Google Business", "Keyword Strategy", "On-Page Optimization"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    href: "/services/website-maintenance",
    description:
      "Keep your practice website secure, up-to-date, and performing at its best. We handle updates, backups, speed optimization, and ongoing technical support so you can focus on patients.",
    features: ["Security & Updates", "Performance Optimization", "Ongoing Technical Support"],
  },
  {
    icon: Palette,
    title: "Web Design",
    href: "/services/web-design",
    description:
      "Custom, conversion-focused websites designed specifically for healthcare and medspa brands. We build beautiful, mobile-first experiences that turn visitors into booked appointments.",
    features: ["Custom Design & Branding", "Mobile-First Development", "Conversion Optimization"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              AI solutions built for healthcare and medspa growth.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our suite of AI empowered services covers every stage of the patient journey, from first touchpoint to lasting loyalty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground mx-auto md:mx-0">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="font-heading text-xl font-semibold text-card-foreground">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

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
  )
}
