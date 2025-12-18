import SectionHeading from "@/components/shared/SectionHeading";
import { Check } from "lucide-react";

const DeepDiveSection = () => {
  const features = [
    "Recognizes new vs. returning patients automatically",
    "Handles emergency triage with configurable escalation",
    "Answers common questions about office hours, location, and services",
    "Routes complex requests to the right team member",
    "Speaks naturally—not like a typical phone tree",
    "Works seamlessly with your existing phone system",
  ];

  return (
    <section className="py-20 lg:py-28 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <SectionHeading
              title="A front desk that never puts patients on hold"
              description="FlossLine handles the full spectrum of patient calls—from routine scheduling to urgent requests—with the attentiveness your patients deserve."
              align="left"
              className="mb-10"
            />

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Placeholder */}
          <div className="relative">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-foreground">Active Call</span>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Caller:</p>
                  <p className="font-medium text-foreground mb-4">"Hi, I need to schedule a cleaning for my daughter."</p>
                  <p className="text-sm text-muted-foreground mb-2">FlossLine:</p>
                  <p className="font-medium text-foreground">
                    "I'd be happy to help you schedule that. Is your daughter a new patient with us, or has she visited before?"
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    New Patient Flow
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    Pediatric
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepDiveSection;