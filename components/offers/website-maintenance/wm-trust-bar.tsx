import { Shield, Clock, RefreshCw, Server } from "lucide-react"

const stats = [
  { icon: Clock, value: "99.9%", label: "Uptime Guarantee" },
  { icon: Shield, value: "24/7", label: "Security Monitoring" },
  { icon: RefreshCw, value: "Daily", label: "Automated Backups" },
  { icon: Server, value: "<2hr", label: "Response Time" },
]

export function MaintenanceTrustBar() {
  return (
    <section className="border-b border-border bg-foreground py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="font-heading text-2xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
