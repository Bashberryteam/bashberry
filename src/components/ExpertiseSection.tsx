import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const tabs = [
  {
    id: "setup",
    label: "Store Setup",
    title: "Launch with Confidence & Scale",
    description: "We build high-performance Shopify stores from the ground up, customized to your brand's unique identity and optimized for immediate conversions.",
    features: [
      "Premium Theme Selection & Configuration",
      "Brand Identity Integration",
      "Optimized Checkout Flows",
      "Essential App Configuration & Testing",
      "Initial SEO & Analytics Setup",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "migration",
    label: "Platform Migration",
    title: "Seamless Platform Migration",
    description: "Zero-downtime migrations preserving SEO equity, URL structures, and customer data integrity.",
    features: [
      "Complete Data Migration",
      "URL Structure Preservation",
      "SEO Equity Transfer",
      "Custom Redirect Mapping",
      "Post-Migration QA & Monitoring",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "custom",
    label: "Custom Development",
    title: "Tailored Solutions for Scale",
    description: "Custom Shopify development for complex requirements that go beyond standard themes and apps.",
    features: [
      "Custom Theme Development",
      "App Integration & Custom APIs",
      "Performance Optimization",
      "Advanced Checkout Customization",
      "Ongoing Technical Support",
    ],
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const ExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState("setup");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Deep Shopify Expertise
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          From zero to launch, or replatforming an enterprise. We handle the technical heavy lifting so you can focus on your brand.
        </p>

        <div className="mb-10 flex justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-foreground">{active.title}</h3>
            <p className="mb-6 text-muted-foreground">{active.description}</p>
            <ul className="mb-8 space-y-3">
              {active.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              Discuss Your Project
            </a>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={active.image}
                alt={active.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-lg border border-border bg-card px-4 py-3 shadow-glow">
              <p className="text-xs text-muted-foreground">Shopify Expert</p>
              <p className="text-sm font-semibold text-primary">Certified Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
