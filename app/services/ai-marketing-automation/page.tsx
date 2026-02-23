import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Megaphone, Mail, MessageSquare, Share2, Target, Layers, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Marketing Automation for Healthcare Practices | ClinicDigital.co",
  description:
    "Automate patient follow-ups, appointment reminders, and email campaigns. Save time and nurture more patients with smart marketing automation for your clinic.",
}

const features = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Smart Email Sequences",
    description:
      "AI-crafted email drip campaigns that nurture leads from first inquiry to booked appointment. Personalized content adapts based on patient behavior and engagement patterns.",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "AI-Powered SMS Campaigns",
    description:
      "Intelligent text message sequences that reach patients on their preferred channel. Automated appointment reminders, promotions, and re-engagement flows that drive action.",
  },
  {
    icon: <Share2 className="h-5 w-5" />,
    title: "Social Media Automation",
    description:
      "Consistent, on-brand social media presence without the manual effort. AI generates, schedules, and optimizes posts across platforms to keep your practice top of mind.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Lead Scoring & Segmentation",
    description:
      "Automatically identify your hottest leads and segment audiences by interest, behavior, and demographics for hyper-targeted campaigns that convert.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Multi-Channel Campaign Orchestration",
    description:
      "Coordinate email, SMS, social, and voice campaigns from a single dashboard. Ensure consistent messaging across every touchpoint in the patient journey.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Performance Analytics",
    description:
      "Real-time dashboards tracking open rates, click-throughs, conversions, and ROI. AI-powered insights recommend optimizations to continuously improve results.",
  },
]

const benefits = [
  "Increase patient bookings by up to 300% with AI-optimized campaigns",
  "Reduce marketing costs by automating repetitive outreach tasks",
  "Personalize every message based on patient behavior and preferences",
  "Maintain HIPAA-compliant communication across all channels",
  "Track every dollar spent with transparent ROI dashboards",
  "Scale your marketing without scaling your team",
]

export default function AIMarketingAutomationPage() {
  return (
    <ServicePageLayout
      badge="AI Marketing Automation"
      title="Reach Every Patient with"
      titleAccent="Intelligent Campaigns"
      subtitle="Automated email campaigns, SMS sequences, and social media outreach powered by AI. Reach the right patients at the right time with personalized messaging that converts."
      heroImage="/images/hero-marketing.jpg"
      heroImageAlt="Digital marketing workspace with analytics dashboards"
      icon={<Megaphone className="h-3.5 w-3.5 text-accent" />}
      features={features}
      benefits={benefits}
      ctaHeading="Ready to Automate Your Marketing?"
      ctaDescription="Book a free strategy call to see how AI-powered marketing automation can fill your appointment book and grow your practice."
    />
  )
}
