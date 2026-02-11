import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "ClinicDigital's AI chatbot handles over 200 patient inquiries per week for us. It's like having an extra team member that never sleeps.",
    author: "Dr. Sarah Chen",
    role: "Medical Director, Vitality Health Group",
    initials: "SC",
  },
  {
    quote:
      "The GoHighLevel setup they built for us was a game-changer. Our marketing runs on autopilot and conversions have tripled.",
    author: "Michael Torres",
    role: "Owner, Elite MedSpa & Wellness",
    initials: "MT",
  },
  {
    quote:
      "From onboarding to results, ClinicDigital was exceptional. Our patient retention improved by 45% in the first quarter.",
    author: "Dr. Rachel Kim",
    role: "Founder, Precision Dermatology",
    initials: "RK",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">Trusted by leading practices.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`star-${testimonial.author}-${i}`}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm italic leading-relaxed text-muted-foreground">
                {`"${testimonial.quote}"`}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-bold text-primary">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
