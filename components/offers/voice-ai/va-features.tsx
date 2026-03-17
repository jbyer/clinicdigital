import {
  Phone,
  CalendarCheck,
  MessageSquareText,
  BrainCircuit,
  Clock,
  ShieldCheck,
  BarChart3,
  Plug,
} from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Intelligent Call Answering",
    description:
      "Your Voice AI agent answers every call with natural, human-like conversation. It greets callers professionally, understands their needs, and provides accurate responses based on your practice information.",
    highlights: [
      "Natural speech recognition",
      "Human-like voice responses",
      "Multi-turn conversations",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Automated Appointment Booking",
    description:
      "Callers can schedule, reschedule, or cancel appointments directly over the phone. The AI syncs with your calendar in real time, eliminating double-bookings and phone tag.",
    highlights: [
      "Real-time calendar sync",
      "Reschedule & cancellation handling",
      "Provider-specific routing",
    ],
  },
  {
    icon: MessageSquareText,
    title: "Lead Qualification & Routing",
    description:
      "Automatically qualify inbound callers based on criteria you define -- insurance type, service interest, urgency level. High-priority calls are transferred immediately; others are scheduled for callback.",
    highlights: [
      "Custom qualification rules",
      "Priority call alerts",
      "Smart call routing",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Custom Voice Training",
    description:
      "We train the Voice AI on your services, procedures, pricing, FAQs, and protocols. It speaks your practice language, understands your specialties, and delivers answers with the accuracy patients expect.",
    highlights: [
      "Specialty-specific training",
      "FAQ & protocol ingestion",
      "Continuous learning",
    ],
  },
  {
    icon: Clock,
    title: "After-Hours & Overflow Handling",
    description:
      "Never lose a lead to voicemail again. Your Voice AI handles after-hours calls, busy periods, and overflow -- capturing every opportunity when your team is unavailable.",
    highlights: [
      "24/7 availability",
      "Overflow call handling",
      "Urgent call escalation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-Aware & Secure",
    description:
      "Built with healthcare privacy in mind. Conversations are encrypted, sensitive data is handled carefully, and the voice agent never stores PHI outside of your approved systems.",
    highlights: [
      "Encrypted conversations",
      "No unauthorized PHI storage",
      "Audit trail & logging",
    ],
  },
  {
    icon: BarChart3,
    title: "Call Analytics & Insights",
    description:
      "Track every call, measure resolution rates, monitor booking conversions, and identify common patient questions. Data-driven insights help you continuously improve patient experience.",
    highlights: [
      "Call analytics dashboard",
      "Booking conversion tracking",
      "Common question reports",
    ],
  },
  {
    icon: Plug,
    title: "CRM & System Integration",
    description:
      "Seamlessly connects to your CRM, EHR, or practice management software. New leads auto-populate your pipeline, trigger follow-up workflows, and update patient records automatically.",
    highlights: [
      "Native CRM integration",
      "API & webhook support",
      "Automated follow-up workflows",
    ],
  },
]

export function VoiceAIFeatures() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Voice AI Capabilities
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              An AI receptionist that never takes a break.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every Voice AI agent is custom-trained on your practice data and
            handles calls with the professionalism and accuracy your patients
            deserve -- answering questions, booking appointments, and
            qualifying leads around the clock.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {feature.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
