const LogoStrip = () => {
  // Placeholder logos - in production these would be real partner logos
  const logos = [
    "Partner Clinic A",
    "Dental Group B",
    "Smile Care C",
    "Family Dental D",
    "Modern Dentistry E",
  ];

  return (
    <section className="py-12 lg:py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Built for modern dental offices
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-background rounded-lg border border-border text-muted-foreground font-medium text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
