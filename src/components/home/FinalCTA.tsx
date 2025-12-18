import CTAButton from "@/components/shared/CTAButton";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/80">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
          Ready to stop missing patient calls?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          See a live demo and a suggested rollout plan tailored to your practice.
        </p>
        <CTAButton
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
          size="lg"
        />
        <p className="text-sm text-primary-foreground/60 mt-6">
          No commitment required. See FlossLine in action first.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
