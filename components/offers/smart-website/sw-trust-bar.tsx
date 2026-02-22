const stats = [
  { value: "4 Weeks", label: "Average delivery time" },
  { value: "70%+", label: "Traffic is mobile-first" },
  { value: "3x", label: "More bookings vs. brochure sites" },
  { value: "100%", label: "Done-for-you setup" },
]

export function SmartWebsiteTrustBar() {
  return (
    <section className="border-b border-border bg-card py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold tracking-tight text-primary lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
