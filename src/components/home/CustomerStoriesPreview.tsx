import { Link } from "react-router-dom";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import { ArrowRight, Building2 } from "lucide-react";

const CustomerStoriesPreview = () => {
  const stories = [
    {
      type: "General Dentistry",
      problem: "Missed calls during busy mornings were costing new patient opportunities.",
      solution: "FlossLine now handles all inbound calls, routing new patients and booking appointments automatically.",
      outcome: "Reduced front desk phone time by over 60%, allowing staff to focus on in-office patients.",
    },
    {
      type: "Pediatric Dentistry",
      problem: "Parents calling after hours had no way to book or get quick answers.",
      solution: "FlossLine captures after-hours calls and provides clear summaries each morning.",
      outcome: "Captured significantly more appointment requests that previously went to voicemail.",
    },
    {
      type: "Multi-Location Practice",
      problem: "Inconsistent call handling across three offices created patient confusion.",
      solution: "FlossLine standardized call flows while respecting each location's specific scheduling rules.",
      outcome: "Unified patient experience with location-specific routing and consistent booking policies.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Customer Stories"
          title="Real practices, real results"
          description="See how dental offices like yours are using FlossLine to capture more appointments and reduce front desk overload."
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">{story.type}</span>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Challenge
                  </p>
                  <p className="text-foreground text-sm">{story.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Solution
                  </p>
                  <p className="text-foreground text-sm">{story.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                    Result
                  </p>
                  <p className="text-foreground text-sm font-medium">{story.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/customer-stories"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Read more stories
            <ArrowRight className="w-4 h-4" />
          </Link>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesPreview;