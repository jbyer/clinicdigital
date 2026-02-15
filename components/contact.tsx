import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                {"Ready to transform your practice? Let's talk."}
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Book a free strategy consultation to discover how AI-powered
              automation can streamline your operations and drive measurable
              growth.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    <a
                      href="mailto:info@clinicdigital.co"
                      className="transition-colors hover:text-primary"
                    >
                      info@clinicdigital.co
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    <a
                      href="tel:+18555800608"
                      className="transition-colors hover:text-primary"
                    >
                      (855) 580-0608
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Office
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Remote-first with teams across the US
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-6">
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                {
                  '"ClinicDigital completely transformed how we manage patient inquiries. Our booking rate jumped 85% in the first three months, and we haven\'t looked back."'
                }
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-bold text-primary">JM</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    Dr. Jessica Monroe
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Owner, Radiance Aesthetic Studio
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8">
            <h3 className="font-heading text-xl font-semibold text-card-foreground">
              Send Us a Message
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            <form className="mt-6 flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-first" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    First Name
                  </label>
                  <input
                    id="contact-first"
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Last Name
                  </label>
                  <input
                    id="contact-last"
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-card-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="contact-practice" className="mb-1.5 block text-sm font-medium text-card-foreground">
                  Practice Name
                </label>
                <input
                  id="contact-practice"
                  type="text"
                  placeholder="Your Practice Name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your practice and how we can help..."
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}
