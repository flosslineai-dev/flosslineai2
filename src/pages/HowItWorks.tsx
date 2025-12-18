import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import { Phone, Settings, TestTube, Rocket, Building2, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Connect",
      description: "Set up phone forwarding or get a dedicated FlossLine number. Works with your existing phone system—no hardware required.",
      details: [
        "Forward calls during specific hours or all the time",
        "Keep your existing practice phone number",
        "No complicated phone system changes needed",
      ],
    },
    {
      number: "02",
      icon: Settings,
      title: "Configure",
      description: "Tell FlossLine how your practice operates. Define your services, providers, hours, and the rules that matter to you.",
      details: [
        "Set up appointment types and durations",
        "Configure provider availability and specialties",
        "Define emergency routing and escalation rules",
        "Customize scripts and conversation flows",
      ],
    },
    {
      number: "03",
      icon: TestTube,
      title: "Test",
      description: "Run sample calls and edge cases before going live. Make sure FlossLine handles your specific scenarios correctly.",
      details: [
        "Practice with realistic call scenarios",
        "Test emergency and edge case handling",
        "Fine-tune responses based on results",
        "Get comfortable before patients hear it",
      ],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Go Live",
      description: "Start answering real patient calls with confidence. Monitor performance and refine as needed.",
      details: [
        "Gradual rollout options available",
        "Real-time monitoring dashboard",
        "Easy adjustments as you learn",
        "Support available when you need it",
      ],
    },
    {
      number: "05",
      icon: Building2,
      title: "Scale",
      description: "For multi-location practices, roll out consistently across all offices while respecting location-specific rules.",
      details: [
        "Unified call handling across locations",
        "Location-specific scheduling rules",
        "Centralized reporting and insights",
        "Consistent patient experience everywhere",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>How It Works | FlossLine Setup Process</title>
        <meta
          name="description"
          content="Get FlossLine running in 5 steps: Connect, Configure, Test, Go Live, and Scale. Fast setup with guided configuration and testing."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                How It Works
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                From setup to live calls in days, not months
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                FlossLine is designed to integrate smoothly with your existing workflows. Here's how we get you up and running.
              </p>
              <CTAButton size="lg" />
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-border hidden lg:block" />
                  )}

                  <div className="flex gap-8 mb-16 lg:mb-20">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <step.icon className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{step.title}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="bg-card rounded-xl border border-border p-6">
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3">
                              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky CTA */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <SectionHeading
                title="Ready to get started?"
                description="Book a demo and we'll walk you through exactly how FlossLine would work for your practice."
                className="mb-8"
              />
              <CTAButton size="lg" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HowItWorks;