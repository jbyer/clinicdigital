import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import {
  Phone,
  Clock,
  CalendarPlus,
  MessageSquare,
  UserCheck,
  Headphones,
  BarChart3,
  ArrowRightLeft,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Voice AI Solutions for Medical Practices | ClinicDigital.co",
  description:
    "AI-powered voice assistants for healthcare. Automate inbound calls, book appointments, answer patient questions, and reduce hold times 24/7.",
  keywords: [
    "voice AI healthcare",
    "AI phone answering medical",
    "automated call handling clinic",
    "voice assistant medspa",
    "AI receptionist healthcare",
    "phone automation medical practice",
    "voice AI appointment booking",
    "conversational AI healthcare",
  ],
}

const features = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Intelligent Call Answering",
    description:
      "AI answers every call with natural, human-like conversation. Handles inquiries, provides information, and routes calls appropriately without frustrating hold times.",
  },
  {
    icon: <CalendarPlus className="h-5 w-5" />,
    title: "Voice-Based Appointment Booking",
    description:
      "Patients book, reschedule, or cancel appointments using natural speech. The AI handles availability checks and sends instant confirmations.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "24/7 After-Hours Coverage",
    description:
      "Never miss a call again. Voice AI handles patient inquiries around the clock, capturing leads and providing information even when your office is closed.",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Natural Language Understanding",
    description:
      "Advanced AI understands context, accents, and complex requests. Patients speak naturally and get accurate, helpful responses every time.",
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    title: "Caller Intent Recognition",
    description:
      "Automatically identifies why patients are calling -- appointments, billing questions, prescription refills -- and routes them to the right resource instantly.",
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Warm Transfer to Staff",
    description:
      "When calls need human attention, Voice AI provides seamless handoff with full context, so your team can pick up right where the AI left off.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Call Analytics & Insights",
    description:
      "Track call volumes, peak times, common inquiries, and conversion rates. Data-driven insights help optimize your phone operations.",
  },
  {
    icon: <ArrowRightLeft className="h-5 w-5" />,
    title: "CRM & EHR Integration",
    description:
      "Automatically logs calls, updates patient records, and syncs with your existing systems for a unified view of patient communications.",
  },
]

const benefits = [
  "Answer 100% of calls instantly -- no more hold times or voicemail",
  "Reduce front-desk workload by handling routine inquiries automatically",
  "Capture after-hours leads that would otherwise be lost",
  "Provide consistent, professional responses to every caller",
  "Train AI on your specific services, pricing, and protocols",
  "Scale phone capacity without hiring additional staff",
  "Improve patient satisfaction with immediate, helpful responses",
  "Get detailed analytics on call patterns and patient needs",
]

export default function VoiceAIPage() {
  return (
    <ServicePageLayout
      badge="Voice AI Technology"
      title="Every Call Answered with"
      titleAccent="Voice AI"
      subtitle="Intelligent voice assistants that handle inbound calls, book appointments, and answer patient questions 24/7. Reduce hold times and capture every lead with natural, human-like conversation."
      heroImage="/images/hero-voice-ai-service.jpg"
      heroImageAlt="AI-powered voice system at medical practice front desk"
      icon={<Phone className="h-3.5 w-3.5 text-accent" />}
      features={features}
      benefits={benefits}
      ctaHeading="Ready to Transform Your Phone Experience?"
      ctaDescription="See how Voice AI can answer every call, book more appointments, and free your staff to focus on in-person patient care."
    />
  )
}
