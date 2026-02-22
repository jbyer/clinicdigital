import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Smart Website for Medical Practices & MedSpas | ClinicDigital.co",
  description:
    "Get a conversion-focused, AI-powered Smart Website built exclusively for healthcare providers. Automated patient intake, built-in SEO, CRM integration, HIPAA-aware design, and 24/7 AI chatbot -- all done-for-you.",
  keywords: [
    "smart website healthcare",
    "medical practice website",
    "medspa website design",
    "healthcare website builder",
    "patient booking website",
    "HIPAA compliant website",
    "medical website SEO",
    "clinic website design",
    "automated patient intake",
    "healthcare CRM website",
    "AI chatbot medical website",
    "conversion optimized medical website",
    "done for you clinic website",
    "dental practice website",
    "smart clinic website",
  ],
  openGraph: {
    title: "Smart Website for Healthcare | ClinicDigital.co",
    description:
      "A done-for-you, conversion-focused website with AI chatbot, patient intake automation, built-in SEO, and CRM -- purpose-built for medical practices and medspas.",
    type: "website",
    url: "https://www.clinicdigital.co/offers/smart-website",
  },
}

export default function SmartWebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
