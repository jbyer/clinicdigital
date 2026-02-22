const stats = [
  { value: "150+", label: "Healthcare practices served" },
  { value: "3.2x", label: "Average patient increase" },
  { value: "97%", label: "Client retention rate" },
  { value: "#1", label: "Local search rankings achieved" },
]

export function OffersTrustBar() {
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
