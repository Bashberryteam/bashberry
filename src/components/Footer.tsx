const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            B
          </div>
          <span className="text-lg font-semibold text-foreground">
            Bash Berry <span className="text-primary">Xpert</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bash Berry Xpert. All rights reserved.
        </p>

        <div className="flex gap-6">
          {["Services", "Case Studies", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
