import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "SEO for Medical Practices & MedSpas | ClinicDigital.co",
  description:
    "Dominate local search results and attract high-intent patients with data-driven SEO strategies tailored for medical practices and medspas.",
}

const features = [
  {
    title: "Local SEO & Google Business",
    description:
      "Optimize your Google Business Profile, build local citations, and dominate the map pack for searches like 'medspa near me' and 'dermatologist in [city].'",
  },
  {
    title: "Keyword Strategy",
    description:
      "Research and target the exact terms your ideal patients are searching for. We build content strategies around high-intent, high-volume keywords in your niche.",
  },
  {
    title: "On-Page Optimization",
    description:
      "Technical SEO audits, meta tag optimization, schema markup, and content structuring to ensure every page on your site is optimized for search engines.",
  },
  {
    title: "Content Marketing",
    description:
      "SEO-driven blog posts, service pages, and landing pages that establish your authority, educate patients, and rank for competitive keywords.",
  },
  {
    title: "Reputation Management",
    description:
      "Automated review request campaigns that build your online reputation. More 5-star reviews mean better rankings and more patient trust.",
  },
  {
    title: "Competitor Analysis",
    description:
      "Understand exactly where your competitors rank and why. We identify gaps and opportunities to outperform them in search results.",
  },
]

const benefits = [
  "Rank #1 on Google for your most valuable local keywords",
  "Attract high-intent patients who are actively searching for your services",
  "Build long-term organic traffic that reduces paid ad dependency",
  "Increase Google Business Profile visibility and map pack presence",
  "Grow your online reputation with more positive patient reviews",
  "Get transparent monthly reporting on rankings, traffic, and conversions",
]

export default function SEOPage() {
  return (
    <ServicePageLayout
      badge="Search Engine Optimization"
      title="Dominate Local Search with"
      titleAccent="Healthcare SEO"
      subtitle="Dominate local search results and attract high-intent patients with data-driven SEO strategies tailored for medical practices and medspas."
      heroImage="/images/hero-seo.jpg"
      heroImageAlt="SEO analytics and search engine results on monitor"
      icon={<Search className="h-3.5 w-3.5 text-accent" />}
      features={features}
      benefits={benefits}
      ctaHeading="Ready to Rank Higher?"
      ctaDescription="Get a free SEO audit and discover exactly how we can help your practice dominate local search results."
    />
  )
}
