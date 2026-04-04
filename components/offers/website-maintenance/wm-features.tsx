import {
  RefreshCw,
  Shield,
  Activity,
  Database,
  Zap,
  Bug,
  FileText,
  Headphones,
} from "lucide-react"

const features = [
  {
    icon: RefreshCw,
    title: "Regular Software Updates",
    description:
      "We keep your CMS, plugins, and themes updated to the latest versions. No more security vulnerabilities from outdated software or compatibility issues breaking your site.",
    highlights: [
      "WordPress & plugin updates",
      "Theme compatibility checks",
      "Staged testing before live",
    ],
  },
  {
    icon: Shield,
    title: "Security Monitoring & Hardening",
    description:
      "Proactive security scanning detects threats before they become problems. We implement firewalls, malware scanning, and login protection to keep hackers out.",
    highlights: [
      "Malware scanning & removal",
      "Firewall configuration",
      "Brute force protection",
    ],
  },
  {
    icon: Activity,
    title: "24/7 Uptime Monitoring",
    description:
      "Your website is monitored every 60 seconds from multiple global locations. If it goes down, we know immediately and start fixing it before you even notice.",
    highlights: [
      "60-second check intervals",
      "Instant downtime alerts",
      "Global monitoring nodes",
    ],
  },
  {
    icon: Database,
    title: "Daily Automated Backups",
    description:
      "Daily backups stored securely off-site mean your data is always protected. If disaster strikes, we can restore your entire site in minutes, not days.",
    highlights: [
      "Daily automated backups",
      "30-day backup retention",
      "One-click restore",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "We continuously optimize your site speed with caching, image compression, and database cleanup. A fast website means better Google rankings and happier patients.",
    highlights: [
      "Page speed optimization",
      "Image compression",
      "Database optimization",
    ],
  },
  {
    icon: Bug,
    title: "Bug Fixes & Troubleshooting",
    description:
      "Something broken? We fix it fast. From broken links to display issues, our team diagnoses and resolves problems quickly so your site always looks professional.",
    highlights: [
      "Priority bug fixes",
      "Cross-browser testing",
      "Mobile responsiveness",
    ],
  },
  {
    icon: FileText,
    title: "Content Updates & Edits",
    description:
      "Need to update your hours, add a new service, or swap out a photo? We handle routine content updates so you do not have to wrestle with your website.",
    highlights: [
      "Text & image updates",
      "New page creation",
      "Menu & navigation edits",
    ],
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description:
      "Direct access to our support team when you need help. No ticket queues or chatbots -- just real humans who know your website inside and out.",
    highlights: [
      "Email & phone support",
      "Same-day response",
      "Dedicated account manager",
    ],
  },
]

export function MaintenanceFeatures() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Maintenance Services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Everything your website needs to stay healthy.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From security patches to content updates, we handle the technical
            details so your practice website runs smoothly 24/7.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
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
