const testimonials = [
  {
    quote: "Bash Berry Xpert completely transformed our technical SEO infrastructure. Within 4 months, our organic revenue doubled, and we captured top positions for our core category terms.",
    name: "Sarah Jenkins",
    role: "CMO, Elevate Apparel",
    initial: "S",
  },
  {
    quote: "The migration from Magento to Shopify was flawless. Zero downtime, perfectly preserved URL structures, and a stunning new design that immediately bumped our conversion rate by 30%.",
    name: "David Chen",
    role: "Founder, TechGear Pro",
    initial: "D",
  },
  {
    quote: "Their grasp on the Google/Meta ecosystem is unparalleled. They don't just run ads; they look at our entire unit economics to scale profitably.",
    name: "Marcus Thorne",
    role: "VP Ecommerce, PureNaturals",
    initial: "M",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-section-alt py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-14 text-center text-3xl font-bold text-foreground md:text-4xl">
          Trusted by Ambitious Brands
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover rounded-xl border border-border bg-card p-8"
            >
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
