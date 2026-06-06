import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export const metadata = {
  title: "Front Desk Autopilot | 24/7 AI Patient Scheduling | ClinicDigital",
  description:
    "AI chatbots and voice assistants that handle appointments, intake, and patient service 24/7. Never miss a call or miss an appointment again.",
}

export default function FrontDeskAutopilotPage() {
  return (
    <>
      <SpringSalePopup />
      <Navigation />
      <main>
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Front Desk Autopilot
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                24/7 AI Patient Service
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              AI chatbots and voice assistants handle appointment booking, intake forms, and patient communication automatically—so your team can focus on care.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-20 bg-muted/50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-12">
              Always-On Patient Engagement
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">AI Chatbots</h3>
                <p className="text-muted-foreground">Intelligent conversational AI that answers questions, qualifies leads, and books appointments automatically.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Voice AI Receptionist</h3>
                <p className="text-muted-foreground">Never miss a call again. Our voice AI answers phones, books appointments, and handles complex patient conversations naturally.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Automated Appointment Intake</h3>
                <p className="text-muted-foreground">Digital forms and intake processes that work 24/7, capturing patient information automatically.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Reduced No-Shows</h3>
                <p className="text-muted-foreground">Automated reminders and follow-ups that keep patients on track and eliminate missed appointments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Let AI Handle Your Front Desk
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a demo to see how AI can free up your staff and boost appointment bookings.
            </p>
            <a href="/book-a-call" className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
              Book A Call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
