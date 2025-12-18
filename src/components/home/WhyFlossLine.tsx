import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import { Phone, CalendarCheck, ClipboardList } from "lucide-react";

const WhyFlossLine = () => {
  const features = [
    {
      icon: Phone,
      title: "Answer every call instantly",
      description:
        "No more hold music or missed calls. FlossLine picks up immediately, 24 hours a day, 7 days a week—even during your busiest hours.",
    },
    {
      icon: CalendarCheck,
      title: "Book, reschedule, and triage—automatically",
      description:
        "New patient? Existing patient? Emergency? FlossLine routes each call appropriately and books appointments directly into your schedule.",
    },
    {
      icon: ClipboardList,
      title: "Capture intake and insurance details",
      description:
        "Collect patient information, reason for visit, preferred times, and insurance details—all during the initial call, before they even arrive.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Why FlossLine"
          title="Your front desk, supercharged"
          description="Three ways FlossLine transforms how your practice handles patient calls."
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFlossLine;