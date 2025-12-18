import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import { CheckCircle } from "lucide-react";

const OnboardingSection = () => {
  const steps = [
    "Guided configuration tailored to your practice",
    "Call-flow testing with real scenarios",
    "Continuous tuning based on actual calls",
    "Multi-location rollout support (if applicable)",
    "Dedicated support throughout the process",
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Onboarding"
            title="We help you go live the right way"
            description="FlossLine isn't just software—it's a partnership. Our team works with you to ensure a smooth rollout and ongoing success."
            className="mb-12"
          />

          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{step}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-6">
                Ready to see how FlossLine fits your practice?
              </p>
              <CTAButton size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;