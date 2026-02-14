import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Bot, Clock, CalendarPlus, HelpCircle, Filter, Globe, ArrowRightLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Chatbots & Virtual Assistants | ClinicDigital.co",
  description:
    "24/7 AI assistants that handle appointment booking, FAQ responses, and lead qualification. Reduce staff workload while delivering exceptional patient experiences.",
}

const features = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "24/7 Lead Capture",
    description:
      "Never miss an inquiry. AI chatbots engage website visitors around the clock, capturing contact info and qualifying leads even when your office is closed.",
  },
  {
    icon: <CalendarPlus className="h-5 w-5" />,
    title: "Appointment Scheduling",
    description:
      "Patients book appointments directly through the chat interface. The AI handles availability checks, confirmations, and calendar syncing in real time.",
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    title: "Intelligent FAQ Responses",
    description:
      "Trained on your practice's specific services, pricing, and policies. Answers patient questions instantly with accurate, on-brand responses.",
  },
  {
    icon: <Filter className="h-5 w-5" />,
    title: "Lead Qualification",
    description:
      "AI asks the right questions to identify high-intent patients and routes them to your team with full context, so no time is wasted on unqualified leads.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Multi-Platform Deployment",
    description:
      "Deploy chatbots on your website, Facebook Messenger, Instagram DMs, and SMS. Meet patients wherever they are with a consistent conversational experience.",
  },
  {
    icon: <ArrowRightLeft className="h-5 w-5" />,
    title: "Seamless Handoff to Staff",
    description:
      "When a conversation needs a human touch, the AI smoothly hands off to your team with the full chat history and patient context.",
  },
]

const benefits = [
  "Capture leads 24/7 -- even outside business hours",
  "Reduce front-desk phone volume by up to 60%",
  "Qualify leads automatically before they reach your team",
  "Provide instant responses that improve patient satisfaction",
  "Customize chatbot personality to match your brand voice",
  "Scale patient communication without hiring additional staff",
]

export default function AIChatbotsPage() {
  return (
    <ServicePageLayout
      badge="AI Chatbots & Virtual Assistants"
      title="Your Practice, Always On with"
      titleAccent="AI Assistants"
      subtitle="24/7 AI assistants that handle appointment booking, FAQ responses, and lead qualification. Reduce staff workload while maintaining an exceptional patient experience."
      heroImage="/images/hero-chatbot.jpg"
      heroImageAlt="AI chatbot interface on tablet at medical reception"
      icon={<Bot className="h-3.5 w-3.5 text-accent" />}
      features={features}
      benefits={benefits}
      ctaHeading="Ready to Deploy Your AI Assistant?"
      ctaDescription="Let us show you how an AI chatbot can capture more leads, reduce call volume, and improve the patient experience at your practice."
    />
  )
}
