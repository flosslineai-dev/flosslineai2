import SectionHeading from "@/components/shared/SectionHeading";
import { Phone, Calendar, Bell, Moon } from "lucide-react";

const AutomationGrid = () => {
  const automations = [
    {
      icon: Phone,
      title: "Inbound call handling (24/7)",
      description:
        "Every call is answered immediately, day or night. Patients get the help they need without waiting.",
    },
    {
      icon: Calendar,
      title: "Scheduling workflows",
      description:
        "Book, reschedule, or cancel appointments automatically based on your availability rules.",
    },
    {
      icon: Bell,
      title: "Appointment confirmations & follow-ups",
      description:
        "Reduce no-shows with automated reminders and confirmation calls that feel personal.",
    },
    {
      icon: Moon,
      title: "After-hours capture + next-day handoff",
      description:
        "Capture every after-hours opportunity and deliver clear summaries to your team each morning.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Automation"
          title="Voice-first workflows, dental-only focus"
          description="FlossLine is purpose-built for dental offices. Every feature is designed around how your practice actually operates."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {automations.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationGrid;