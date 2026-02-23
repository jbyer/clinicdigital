import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Wrench, ShieldCheck, Gauge, Headphones, DatabaseBackup, Activity, FileEdit } from "lucide-react"

export const metadata: Metadata = {
  title: "Healthcare & Medspa Website Maintenance Services - ClinicDigital.co",
  description:
    "Focus on patients, not website problems. Our maintenance plans handle updates, security, backups, and technical issues so your site stays online and secure.",
  keywords: []
}

const features = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Security & Updates",
    description:
      "Regular security patches, plugin updates, and vulnerability monitoring to keep your website safe from threats. We proactively protect your patients' data.",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Performance Optimization",
    description:
      "Continuous speed optimization, image compression, caching configuration, and Core Web Vitals tuning to keep your site loading fast on every device.",
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Ongoing Technical Support",
    description:
      "Dedicated support for content updates, bug fixes, and technical questions. Your team always has an expert to turn to when issues arise.",
  },
  {
    icon: <DatabaseBackup className="h-5 w-5" />,
    title: "Automated Backups",
    description:
      "Daily automated backups with one-click restore capability. Your website data is always protected and recoverable in any scenario.",
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: "Uptime Monitoring",
    description:
      "24/7 uptime monitoring with instant alerts if your site goes down. We respond and resolve issues before your patients even notice.",
  },
  {
    icon: <FileEdit className="h-5 w-5" />,
    title: "Content Updates",
    description:
      "Need to update staff bios, add new services, or change operating hours? We handle all content updates quickly and accurately.",
  },
]

const benefits = [
  "Keep your website secure with proactive vulnerability monitoring",
  "Maintain fast page load speeds that improve SEO and user experience",
  "Get dedicated technical support without hiring an in-house developer",
  "Never worry about backups -- automated daily snapshots keep you safe",
  "Receive 24/7 uptime monitoring with rapid incident response",
  "Focus on patient care while we handle all website updates",
]

export default function WebsiteMaintenancePage() {
  return (
    <ServicePageLayout
      badge="Website Maintenance"
      title="Keep Your Practice Website"
      titleAccent="Secure & Fast"
      subtitle="Keep your practice website secure, up-to-date, and performing at its best. We handle updates, backups, speed optimization, and ongoing technical support so you can focus on patients."
      heroImage="/images/hero-maintenance.jpg"
      heroImageAlt="Developer workstation showing website monitoring dashboard"
      icon={<Wrench className="h-3.5 w-3.5 text-accent" />}
      features={features}
      benefits={benefits}
      ctaHeading="Ready for Worry-Free Maintenance?"
      ctaDescription="Let our team handle the technical side so you can focus on what matters most -- your patients."
    />
  )
}
