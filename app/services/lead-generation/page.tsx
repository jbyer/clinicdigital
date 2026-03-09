import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import {
  Target,
  UserPlus,
  Zap,
  Mail,
  MessageSquare,
  Phone,
  BarChart3,
  Filter,
  Calendar,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Lead Generation for Medical Practices & MedSpas | ClinicDigital.co",
  description:
    "Capture, nurture, and convert more patient leads with our all-in-one lead generation system. Automated follow-ups, smart forms, multi-channel outreach, and CRM integration designed for healthcare.",
  keywords: [
    "lead generation healthcare",
    "medical practice lead generation",
    "medspa lead capture",
    "patient acquisition",
    "healthcare CRM",
    "automated follow-up",
    "lead nurturing",
    "patient leads",
    "medical marketing automation",
    "conversion optimization healthcare",
  ],
}

const features = [
  {
    icon: <UserPlus className="h-5 w-5" />,
    title: "Smart Lead Capture Forms",
    description:
      "High-converting forms, landing pages, and surveys that capture patient information seamlessly. Embed anywhere on your website or run as standalone funnels to maximize lead capture.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Instant Automated Follow-Up",
    description:
      "Never lose a lead to slow response times. Automated instant replies via email, SMS, or voice ensure every inquiry gets immediate attention, even after hours.",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Multi-Channel Nurturing",
    description:
      "Engage leads across email, SMS, voicemail drops, and social media with coordinated nurturing sequences that guide prospects from first inquiry to booked appointment.",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Missed Call Text-Back",
    description:
      "Automatically send a text message when a call goes unanswered, capturing leads that would otherwise slip away. Turn missed opportunities into booked consultations.",
  },
  {
    icon: <Filter className="h-5 w-5" />,
    title: "Lead Scoring & Qualification",
    description:
      "AI-powered lead scoring identifies your hottest prospects so your team can prioritize high-value opportunities. Smart tags and triggers route leads to the right workflows.",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Integrated Appointment Booking",
    description:
      "Embedded calendars let qualified leads book directly into your schedule. Reduce friction and increase conversions by letting patients self-book at their convenience.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Pipeline & Attribution Tracking",
    description:
      "Visualize every lead's journey through your sales pipeline. Track which campaigns, channels, and touchpoints drive conversions with clear attribution reporting.",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Unified Contact Management",
    description:
      "All lead interactions—clicks, replies, calls, bookings—linked to a single contact record in your CRM. Full visibility into every touchpoint for personalized follow-up.",
  },
]

const benefits = [
  "Capture 3x more leads with optimized forms and instant follow-up",
  "Convert more inquiries with automated multi-channel nurturing sequences",
  "Never miss a lead with 24/7 automated response systems",
  "Prioritize high-value prospects with AI-powered lead scoring",
  "Track every dollar spent with clear campaign attribution",
  "Reduce manual work by automating repetitive lead management tasks",
  "Integrate seamlessly with your existing website and tools",
  "Maintain HIPAA-compliant communication across all channels",
]

export default function LeadGenerationPage() {
  return (
    <ServicePageLayout
      badge="Lead Generation"
      title="Capture & Convert More"
      titleAccent="Patient Leads"
      subtitle="An all-in-one lead generation system that captures inquiries, nurtures prospects, and fills your appointment book—automatically. Stop losing leads to slow follow-up and fragmented tools."
      heroImage="/images/hero-lead-generation.jpg"
      heroImageAlt="Modern healthcare practice with lead generation dashboard"
      icon={<Target className="h-3.5 w-3.5 text-accent" />}
      features={features}
      benefits={benefits}
      ctaHeading="Ready to Generate More Patient Leads?"
      ctaDescription="Book a free strategy call to see how our lead generation system can fill your pipeline with qualified prospects and grow your practice."
    />
  )
}
