const stats = [
  { value: "2 to 4 Weeks", label: "Average delivery time" },
  { value: "70%+", label: "Traffic is mobile-first" },
  { value: "3x", label: "More bookings vs. brochure sites" },
  { value: "100%", label: "Done-for-you setup" },
]

export function SmartWebsiteTrustBar() {
  return (
    <section className="bg-foreground py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl font-bold text-primary sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium text-background/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
