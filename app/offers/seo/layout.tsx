import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Healthcare SEO & Digital Marketing Services | ClinicDigital.co",
  description:
    "Dominate local search, attract high-intent patients, and grow your medical practice or medspa with AI-powered SEO, content marketing, reputation management, and conversion optimization from ClinicDigital.",
  keywords: [
    "healthcare SEO",
    "medical practice marketing",
    "medspa SEO",
    "local SEO for doctors",
    "dental SEO",
    "patient acquisition",
    "healthcare digital marketing",
    "medical practice growth",
    "Google Business Profile optimization",
    "healthcare content marketing",
    "AI marketing for clinics",
    "reputation management healthcare",
  ],
  openGraph: {
    title: "Healthcare SEO & Digital Marketing | ClinicDigital.co",
    description:
      "AI-powered SEO and digital marketing solutions built exclusively for medical practices, medspas, and healthcare providers. Get more patients through the door.",
    type: "website",
    url: "https://www.clinicdigital.co/offers/seo",
  },
}

export default function OffersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
