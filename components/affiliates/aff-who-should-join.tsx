import { Stethoscope, ClipboardList, Code, Heart } from "lucide-react"

const personas = [
  {
    icon: Stethoscope,
    title: "Healthcare Consultants",
    description:
      "Already advising practices on operations, compliance, or growth? Add digital services to your recommendations and earn on every referral.",
  },
  {
    icon: ClipboardList,
    title: "Practice Managers",
    description:
      "Know other managers struggling with patient acquisition or outdated systems? Help them discover better solutions while earning rewards.",
  },
  {
    icon: Code,
    title: "Web Developers",
    description:
      "Building websites but not offering marketing? Refer clients who need lead generation, SEO, or AI chatbots and earn without expanding your services.",
  },
  {
    icon: Heart,
    title: "Satisfied Clients",
    description:
      "Love your results with ClinicDigital? Share your experience with peers and colleagues, and get rewarded every time they sign up.",
  },
]

export function AffiliatesWhoShouldJoin() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Who Should Join
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Perfect for healthcare professionals and digital experts.
            </span>
          </h2>
        </div>

        {/* Persona Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((persona) => (
            <article
              key={persona.title}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:items-start sm:text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <persona.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-card-foreground">
                {persona.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {persona.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
