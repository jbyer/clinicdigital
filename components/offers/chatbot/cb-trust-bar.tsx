const stats = [
  { value: "24/7", label: "Always-on patient support" },
  { value: "85%+", label: "Questions resolved instantly" },
  { value: "3x", label: "More after-hours bookings" },
  { value: "<1 Week", label: "Deployed and live" },
]

export function ChatbotTrustBar() {
  return (
    <section className="bg-foreground py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-background/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
