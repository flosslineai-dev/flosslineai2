import SectionHeading from "@/components/shared/SectionHeading";
import { Settings, Clock, Users, AlertTriangle, Calendar, ArrowRight } from "lucide-react";

const TailoredSection = () => {
  const configOptions = [
    { icon: Clock, label: "Office hours and holiday schedules" },
    { icon: Users, label: "Provider availability and specialties" },
    { icon: Calendar, label: "Appointment types and durations" },
    { icon: AlertTriangle, label: "Emergency routing rules" },
    { icon: Settings, label: "New vs. existing patient logic" },
    { icon: ArrowRight, label: "Escalation and handoff preferences" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              <div className="bg-secondary p-4">
                <span className="text-secondary-foreground font-medium text-sm">Office Configuration</span>
              </div>
              <div className="p-6 space-y-4">
                {configOptions.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <option.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{option.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Fully Configurable"
              title="Your scripts. Your rules. Every time."
              description="Every dental practice is different. FlossLine adapts to your specific workflows, policies, and preferences—so every patient interaction feels like it came from your own team."
              align="left"
              className="mb-8"
            />

            <p className="text-muted-foreground leading-relaxed">
              Configure everything from how emergencies are handled to which providers are available for specific appointment types. Update your settings anytime, and FlossLine adjusts immediately—no waiting, no complicated setup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoredSection;