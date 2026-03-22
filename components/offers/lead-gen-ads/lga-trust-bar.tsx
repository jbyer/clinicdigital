const stats = [
  { value: "4 Months Minimum", label: "Campaign duration" },
  { value: "5-7 Days", label: "Campaign goes live" },
  { value: "Multi Platform", label: "Advertising Networks" },
]

export function LeadGenAdsTrustBar() {
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
