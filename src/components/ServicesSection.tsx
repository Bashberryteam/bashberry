import { Store, Search, Target, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Shopify Store Design",
    description: "High-converting, bespoke Shopify experiences designed for speed, usability, and maximum conversions.",
  },
  {
    icon: Search,
    title: "Technical SEO",
    description: "Deep-dive technical optimization ensuring your store ranks higher and captures high-intent organic traffic.",
  },
  {
    icon: Target,
    title: "Google/Meta Ecosystem",
    description: "Full-funnel paid acquisition strategies across search and social to drive profitable customer acquisition.",
  },
  {
    icon: TrendingUp,
    title: "E-commerce Growth",
    description: "Strategic consulting covering CRO, retention, and LTV expansion to sustainably scale your revenue.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Comprehensive Growth Infrastructure
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
          We don't just build stores; we architect end-to-end digital ecosystems designed to dominate your niche.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <a
                href="#contact"
                className="text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
