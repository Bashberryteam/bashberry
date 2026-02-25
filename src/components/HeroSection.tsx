import { ArrowRight, CheckCircle2 } from "lucide-react";

const badges = ["Full-Stack Growth", "Multi-Channel Marketing", "Revenue-First Approach"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient pt-16">
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" />
          All-in-One E-commerce Growth Partner
        </div>

        <h1 className="mb-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
          The Complete Shopify{" "}
          <span className="text-gradient">Sales Growth Engine.</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We don't just build stores; we scale them. From technical design to
          Google/Meta Ecosystem mastery, we turn browsers into loyal buyers.
        </p>

        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="bg-gradient-primary flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            View Our Growth Framework <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/40"
          >
            Work With Us
          </a>
        </div>

        <a
          href="mailto:bashberryexpert@gmail.com"
          className="mb-8 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          bashberryexpert@gmail.com
        </a>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
