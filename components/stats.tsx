const stats = [
  { value: "150+", label: "Practices Served" },
  { value: "3.2x", label: "Average ROI" },
  { value: "40%", label: "Reduction in No-Shows" },
  { value: "98%", label: "Client Retention" },
]

export function Stats() {
  return (
    <section className="bg-foreground py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-background/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
