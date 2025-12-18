import SectionHeading from "@/components/shared/SectionHeading";
import { Phone, PhoneOff, CalendarPlus, Moon } from "lucide-react";

const InsightsSection = () => {
  const metrics = [
    {
      icon: Phone,
      value: "2,847",
      label: "Calls answered",
      trend: "+12% this month",
    },
    {
      icon: PhoneOff,
      value: "312",
      label: "Missed calls prevented",
      trend: "vs. before FlossLine",
    },
    {
      icon: CalendarPlus,
      value: "1,156",
      label: "Appointments requested",
      trend: "Last 30 days",
    },
    {
      icon: Moon,
      value: "428",
      label: "After-hours opportunities",
      trend: "Captured & queued",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="See what you're saving—and what you're booking"
          description="Track your practice's call performance and understand the real impact of never missing a patient call."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-secondary-foreground/5 rounded-2xl p-6 border border-secondary-foreground/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-secondary-foreground mb-2">{metric.value}</p>
              <p className="font-medium text-secondary-foreground mb-1">{metric.label}</p>
              <p className="text-sm text-secondary-foreground/60">{metric.trend}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-secondary-foreground/50 mt-8">
          *Metrics shown are examples; results vary by practice.
        </p>
      </div>
    </section>
  );
};

export default InsightsSection;