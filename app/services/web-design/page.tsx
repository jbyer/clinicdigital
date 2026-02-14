import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Web Design for Medical Practices & MedSpas | ClinicDigital.co",
  description:
    "Custom, conversion-focused websites designed specifically for healthcare and medspa brands. Beautiful, mobile-first experiences that turn visitors into booked appointments.",
}

const features = [
  {
    title: "Custom Design & Branding",
    description:
      "Bespoke website designs that reflect your practice's unique identity. We craft visual systems that build trust, convey professionalism, and differentiate your brand.",
  },
  {
    title: "Mobile-First Development",
    description:
      "Over 70% of healthcare searches happen on mobile. Every site we build is optimized for mobile first, ensuring a flawless experience on any device.",
  },
  {
    title: "Conversion Optimization",
    description:
      "Strategic placement of calls-to-action, booking widgets, and contact forms designed to convert visitors into booked appointments at every step.",
  },
  {
    title: "Speed & Performance",
    description:
      "Built with modern technologies for lightning-fast page loads. Fast sites rank higher on Google and provide a better patient experience.",
  },
  {
    title: "SEO-Ready Architecture",
    description:
      "Every page is built with clean code, proper schema markup, and SEO best practices baked in from day one -- giving you a head start in search rankings.",
  },
  {
    title: "Content Strategy",
    description:
      "We help you craft compelling service descriptions, provider bios, and landing pages that educate patients and drive them to take action.",
  },
]

const benefits = [
  "Get a stunning, custom website that reflects your brand identity",
  "Convert more visitors into patients with strategic design",
  "Ensure a flawless experience on mobile, tablet, and desktop",
  "Launch with SEO best practices built into every page",
  "Stand out from competitors with a modern, professional online presence",
  "Receive ongoing support and updates after launch",
]

export default function WebDesignPage() {
  return (
    <ServicePageLayout
      badge="Web Design"
      title="Websites That Convert Visitors Into"
      titleAccent="Booked Patients"
      subtitle="Custom, conversion-focused websites designed specifically for healthcare and medspa brands. We build beautiful, mobile-first experiences that turn visitors into booked appointments."
      heroImage="/images/hero-webdesign.jpg"
      heroImageAlt="Designer workspace showing medical website mockups"
      icon={<Palette className="h-3.5 w-3.5 text-accent" />}
      features={features}
      benefits={benefits}
      ctaHeading="Ready for a Website That Works?"
      ctaDescription="Book a free consultation and see how a custom-designed website can become your practice's most powerful growth tool."
    />
  )
}
