const stats = [
  { value: "+240%", label: "Average Traffic Increase", sub: "YOY" },
  { value: "8.5x", label: "Client ROI", sub: "Avg. ROAS" },
  { value: "150+", label: "Merchants Scaled", sub: "Globally" },
];

const successMetrics = [
  { label: "Organic Revenue", value: "+312%" },
  { label: "Conversion Rate", value: "+145%" },
  { label: "Customer Acquisition Cost", value: "-42%" },
];

const StatsSection = () => {
  return (
    <section id="about" className="bg-section-alt py-24">
      <div className="container mx-auto px-6">
        <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Results-Driven Approach
        </div>
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          We measure our success by your growth.
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          Our strategies are rooted in data, rigorous testing, and an unrelenting focus on profitability. We partner with ambitious brands to shatter their revenue ceilings.
        </p>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-8 text-center"
            >
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
              <p className="text-5xl font-extrabold text-gradient">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card p-8 md:p-12">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Recent Success Story
          </h3>
          <p className="mb-8 text-2xl font-bold text-foreground">Premium Apparel Brand</p>

          <div className="grid gap-6 sm:grid-cols-3">
            {successMetrics.map((metric) => (
              <div key={metric.label} className="rounded-lg bg-secondary p-5">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold text-accent">{metric.value}</p>
              </div>
            ))}
          </div>

          <a
            href="#case-studies"
            className="mt-8 inline-flex text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            Read Full Case Study →
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
