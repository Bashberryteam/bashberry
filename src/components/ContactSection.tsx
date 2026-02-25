import { useState } from "react";

const steps = [
  { num: "1", title: "Initial Consultation", desc: "Discuss your brand's goals and challenges." },
  { num: "2", title: "Growth Roadmap", desc: "We design a custom strategy for your success." },
];

const ContactSection = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", storeUrl: "", challenge: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon.");
    setForm({ firstName: "", lastName: "", email: "", storeUrl: "", challenge: "" });
  };

  return (
    <section id="contact" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Ready to Accelerate Your E-commerce Growth?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Partner with an expert team that understands the full e-commerce ecosystem. We'll help you identify opportunities and map out a comprehensive revenue growth plan.
        </p>

        <div className="mb-12 flex justify-center gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {step.num}
              </div>
              <h4 className="mb-1 text-sm font-semibold text-foreground">{step.title}</h4>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg space-y-4 rounded-xl border border-border bg-card p-8"
        >
          <h3 className="mb-4 text-lg font-semibold text-foreground">Apply for Partnership</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Work Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <input
            type="url"
            placeholder="Store URL"
            value={form.storeUrl}
            onChange={(e) => setForm({ ...form, storeUrl: e.target.value })}
            className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <textarea
            placeholder="What's your biggest challenge?"
            rows={4}
            value={form.challenge}
            onChange={(e) => setForm({ ...form, challenge: e.target.value })}
            className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-primary w-full rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
