import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "AI Chatbot for Medical Practices & MedSpas | ClinicDigital.co",
  description:
    "Deploy a HIPAA-aware AI chatbot that books appointments, answers patient questions, and qualifies leads 24/7. Built for medical practices, dental clinics, and medspas using GoHighLevel Conversation AI.",
  keywords: [
    "AI chatbot healthcare",
    "medical practice chatbot",
    "medspa AI assistant",
    "patient booking chatbot",
    "GoHighLevel conversation AI",
    "HIPAA compliant chatbot",
    "dental chatbot",
    "healthcare virtual assistant",
    "AI lead qualification medical",
    "automated patient intake chatbot",
    "24/7 medical chatbot",
    "clinic AI assistant",
    "conversational AI healthcare",
    "chatbot for doctors",
    "AI receptionist medical practice",
  ],
  openGraph: {
    title: "AI Chatbot for Healthcare | ClinicDigital.co",
    description:
      "A done-for-you AI chatbot that answers patient questions, books appointments, and qualifies leads around the clock -- purpose-built for medical practices and medspas.",
    type: "website",
    url: "https://www.clinicdigital.co/offers/chatbot",
  },
}

export default function ChatbotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
