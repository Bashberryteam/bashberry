const studies = [
  {
    title: "Scaling a Shopify Store from $0 to $10k+",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Holiday Season Sales Explosion via Google Ecosystem",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Consistent 8.5x ROAS with Meta Integrations",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="bg-section-alt py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          ROI Case Studies
        </h2>
        <p className="mb-14 text-center text-muted-foreground">
          Real dashboards, real numbers. See how we drive explosive growth.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {studies.map((study) => (
            <div
              key={study.title}
              className="card-hover group overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{study.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
