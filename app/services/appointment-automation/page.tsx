import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { CalendarCheck, MousePointerClick, BellRing, RefreshCcw, ListPlus, UsersRound, TrendingDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Appointment Automation | ClinicDigital.co",
  description:
    "Eliminate no-shows with intelligent scheduling, automated reminders, and self-service booking integrated with your existing practice management systems.",
}

const features = [
  {
    icon: <MousePointerClick className="h-5 w-5" />,
    title: "Online Self-Booking",
    description:
      "Let patients book appointments directly from your website, social media, or email campaigns. A frictionless booking experience that converts visitors into patients.",
  },
  {
    icon: <BellRing className="h-5 w-5" />,
    title: "Smart Reminders",
    description:
      "AI-timed reminders via SMS and email at the optimal intervals to minimize no-shows. Patients can confirm, reschedule, or cancel with a single tap.",
  },
  {
    icon: <RefreshCcw className="h-5 w-5" />,
    title: "Calendar Sync",
    description:
      "Two-way sync with Google Calendar, Outlook, and your practice management system. Availability updates in real time across all platforms.",
  },
  {
    icon: <ListPlus className="h-5 w-5" />,
    title: "Waitlist Management",
    description:
      "Automatically fill cancelled slots from your waitlist. AI matches available patients to open times and sends instant booking invitations.",
  },
  {
    icon: <UsersRound className="h-5 w-5" />,
    title: "Multi-Provider Scheduling",
    description:
      "Manage schedules for multiple providers, locations, and service types from a single dashboard. Patients always see accurate availability.",
  },
  {
    icon: <TrendingDown className="h-5 w-5" />,
    title: "No-Show Analytics",
    description:
      "Track no-show rates, identify patterns, and implement targeted follow-up campaigns. AI predicts which patients are at risk of missing appointments.",
  },
]

const benefits = [
  "Reduce no-shows by up to 70% with smart reminder sequences",
  "Fill cancelled appointment slots automatically with waitlist management",
  "Give patients 24/7 self-service booking on any device",
  "Sync seamlessly with your existing calendar and PMS",
  "Free up front-desk staff from phone-based scheduling",
  "Support multiple providers and locations from one system",
]

export default function AppointmentAutomationPage() {
  return (
    <ServicePageLayout
      badge="Appointment Automation"
      title="Smarter Scheduling,"
      titleAccent="Fewer No-Shows"
      subtitle="Eliminate no-shows with intelligent scheduling, automated reminders, and self-service booking. Seamlessly integrated with your existing practice management systems."
      heroImage="/images/hero-scheduling.jpg"
      heroImageAlt="Modern medical office with digital appointment scheduling kiosk"
      icon={<CalendarCheck className="h-3.5 w-3.5 text-accent" />}
      features={features}
      benefits={benefits}
      ctaHeading="Ready to Eliminate No-Shows?"
      ctaDescription="See how intelligent scheduling automation can fill your calendar, reduce no-shows, and give patients the booking experience they expect."
    />
  )
}
