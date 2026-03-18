import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Lead Generation Ads for Medical Practices & MedSpas | ClinicDigital.co",
  description:
    "Get a flood of new patient leads in just 3-4 weeks with our done-for-you ad campaigns. Targeted Facebook, Instagram & Google ads starting at $250. No long-term contracts.",
  keywords: [
    "lead generation ads healthcare",
    "medical practice advertising",
    "medspa Facebook ads",
    "dental Google ads",
    "patient acquisition ads",
    "healthcare PPC campaigns",
    "medspa lead generation",
    "medical practice marketing",
    "clinic advertising services",
    "cosmetic dentist ads",
    "plastic surgery lead gen",
    "dermatology advertising",
    "healthcare digital marketing",
    "patient lead campaigns",
    "medical spa marketing",
  ],
  openGraph: {
    title: "Lead Generation Ads for Healthcare | ClinicDigital.co",
    description:
      "Targeted ad campaigns that deliver new patient leads in 3-4 weeks. One-time setup from $250-$800. No monthly retainers, no long-term contracts.",
    type: "website",
    url: "https://www.clinicdigital.co/offers/lead-gen-ads",
  },
}

export default function LeadGenAdsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
