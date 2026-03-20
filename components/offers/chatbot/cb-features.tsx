import {
  Bot,
  CalendarCheck,
  MessageSquareText,
  BrainCircuit,
  Globe,
  ShieldCheck,
  BarChart3,
  Plug,
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Conversational AI Engine",
    description:
      "Powered by Conversation AI with natural-language understanding. Your chatbot holds human-like conversations, interprets patient intent, and provides accurate answers based on your practice information.",
    highlights: [
      "Natural language understanding",
      "Context-aware follow-ups",
      "Multi-turn conversations",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Automated Appointment Booking",
    description:
      "Patients can schedule, reschedule, or cancel appointments directly through the chatbot. Syncs in real time with your calendar so double-bookings never happen -- no phone tag, no wait times.",
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
      "Automatically qualify inbound leads based on criteria you define -- insurance type, service interest, urgency level. Hot leads get fast-tracked to your team; others enter nurture sequences.",
    highlights: [
      "Custom qualification rules",
      "Priority lead alerts",
      "Automated nurture fallback",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Custom Knowledge Base Training",
    description:
      "We train the AI on your services, procedures, pricing, FAQs, and policies. The chatbot speaks your language, understands your specialties, and answers with the accuracy your patients expect.",
    highlights: [
      "Specialty-specific training",
      "FAQ & policy ingestion",
      "Continuous learning from interactions",
    ],
  },
  {
    icon: Globe,
    title: "Multi-Channel Deployment",
    description:
      "Your chatbot can be deployed on your website, Google Business Profile, Facebook Messenger, Instagram DMs, and SMS -- all from a single dashboard. Meet patients wherever they reach out.",
    highlights: [
      "Website widget",
      "Social media & SMS channels",
      "Unified inbox for all conversations",
    ],
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-Aware & Secure",
    description:
      "Built with healthcare privacy in mind. Conversations are encrypted, sensitive data is handled carefully, and the chatbot never stores PHI outside of your approved systems.",
    highlights: [
      "Encrypted conversations",
      "No unauthorized PHI storage",
      "Audit trail & logging",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversation Insights",
    description:
      "Track every conversation, measure resolution rates, monitor booking conversions, and identify the most common patient questions. Data-driven insights to continuously improve the experience.",
    highlights: [
      "Conversation analytics dashboard",
      "Booking conversion tracking",
      "Common question reports",
    ],
  },
  {
    icon: Plug,
    title: "CRM & Workflow Integration",
    description:
      "Seamlessly connects to your CRM, EHR, or practice management software. New leads auto-populate your pipeline, trigger follow-up workflows, and update patient records without manual entry.",
    highlights: [
      "ClinicDigital's CRM native",
      "Zapier & API integrations",
      "Automated follow-up workflows",
    ],
  },
]

export function ChatbotFeatures() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Chatbot Capabilities
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              An AI assistant that works harder than your front desk.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every chatbot is custom-trained on your practice data and deployed
            across every channel your patients use -- answering questions,
            booking appointments, and qualifying leads around the clock.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:items-start sm:text-left"
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
