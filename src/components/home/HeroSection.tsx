import CTAButton from "@/components/shared/CTAButton";
import { Phone, Calendar, Clock } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.png";

const HeroSection = () => {
  const trustBullets = [
    { icon: Clock, text: "24/7 coverage" },
    { icon: Phone, text: "Dental-specific call flows" },
    { icon: Calendar, text: "Fast, guided setup" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/50">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              ANSWER. BOOK. GROW.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Never miss a patient call again.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              FlossLine is a 24/7 AI receptionist for dental offices that answers calls instantly, books appointments, and captures intake details—so your team can stay focused on patients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <CTAButton size="lg" />
              <CTAButton variant="outline" size="lg">
                See It In Action
              </CTAButton>
            </div>

            {/* Trust Bullets */}
            <div className="flex flex-wrap gap-6">
              {trustBullets.map((bullet, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <bullet.icon className="w-4 h-4 text-primary" />
                  <span>{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src={dashboardHero}
                alt="FlossLine call summary dashboard showing appointment booking"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;