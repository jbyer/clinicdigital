import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Users, GitBranch, RefreshCw, Heart, UserCircle, ListChecks, PieChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Patient Management & CRM Solutions - ClinicDigital.co",
  description:
    "Never lose track of patient details again. Our CRM helps you manage patient relationships, follow-ups, and communications to deliver exceptional care.",
  keywords: []
}

const features = [
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Patient Pipeline Tracking",
    description:
      "Visualize every patient's journey from initial inquiry to booked appointment and beyond. Never lose track of a lead with intelligent pipeline management.",
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Automated Follow-Ups",
    description:
      "Set-and-forget follow-up sequences that nurture leads and re-engage dormant patients. AI determines the optimal time and channel for each touchpoint.",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Retention Workflows",
    description:
      "Proactive retention campaigns that keep patients coming back. Automated recall reminders, birthday messages, and loyalty programs built into your CRM.",
  },
  {
    icon: <UserCircle className="h-5 w-5" />,
    title: "Unified Patient Profiles",
    description:
      "All patient data in one place -- contact info, appointment history, communication logs, treatment notes, and engagement scores at a glance.",
  },
  {
    icon: <ListChecks className="h-5 w-5" />,
    title: "Task & Team Management",
    description:
      "Assign tasks, set reminders, and coordinate between front desk, providers, and marketing teams. Everyone stays aligned on patient priorities.",
  },
  {
    icon: <PieChart className="h-5 w-5" />,
    title: "Smart Reporting",
    description:
      "Understand conversion rates, patient lifetime value, and team performance with dashboards designed for healthcare practice owners.",
  },
]

const benefits = [
  "Centralize all patient data in one HIPAA-aware platform",
  "Never miss a follow-up with intelligent automation workflows",
  "Increase patient retention rates by 40% or more",
  "Reduce administrative overhead for your front-desk staff",
  "Get clear visibility into your patient acquisition funnel",
  "Seamlessly integrate with your existing EMR/PMS systems",
]

export default function ClientManagementPage() {
  return (
    <ServicePageLayout
      badge="Client Management (CRM)"
      title="Manage Every Patient Relationship with"
      titleAccent="Precision"
      subtitle="A unified CRM built for healthcare. Track patient journeys, automate follow-ups, and manage relationships from first inquiry to long-term retention."
      heroImage="/images/hero-crm.jpg"
      heroImageAlt="Healthcare professional reviewing patient management system"
      icon={<Users className="h-3.5 w-3.5 text-accent" />}
      features={features}
      benefits={benefits}
      ctaHeading="Ready to Streamline Patient Management?"
      ctaDescription="See how a healthcare-focused CRM can reduce admin work, improve follow-ups, and help you retain more patients."
    />
  )
}
