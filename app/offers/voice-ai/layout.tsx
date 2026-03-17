import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Voice AI for Medical Practices & MedSpas | ClinicDigital.co",
  description:
    "Deploy a HIPAA-aware Voice AI agent that answers calls, books appointments, and qualifies leads 24/7. Built for medical practices, dental clinics, and medspas.",
  keywords: [
    "Voice AI healthcare",
    "medical practice voice assistant",
    "AI phone answering service",
    "medspa voice AI",
    "patient call automation",
    "HIPAA compliant voice AI",
    "dental voice assistant",
    "healthcare virtual receptionist",
    "AI call handling medical",
    "automated patient phone calls",
    "24/7 medical answering service",
    "clinic AI phone system",
    "conversational voice AI healthcare",
    "AI receptionist for doctors",
    "voice automation medical practice",
  ],
  openGraph: {
    title: "Voice AI for Healthcare | ClinicDigital.co",
    description:
      "A done-for-you Voice AI agent that answers patient calls, books appointments, and qualifies leads around the clock -- purpose-built for medical practices and medspas.",
    type: "website",
    url: "https://www.clinicdigital.co/offers/voice-ai",
  },
}

export default function VoiceAILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
