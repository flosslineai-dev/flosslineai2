import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import { Building2, ArrowRight } from "lucide-react";

const CustomerStories = () => {
  const stories = [
    {
      type: "General Dentistry",
      location: "Single-location practice, suburban area",
      challenge:
        "The front desk was overwhelmed during busy mornings, leading to missed calls and lost new patient opportunities. Staff felt stretched thin trying to handle in-office patients while the phone kept ringing.",
      solution:
        "FlossLine now answers all inbound calls, handling new patient intake and scheduling automatically. The front desk only gets involved when FlossLine identifies a situation that needs human attention.",
      results: [
        "Front desk phone time reduced significantly",
        "New patient appointments increased",
        "Staff reported less stress and better focus on in-office patients",
        "After-hours calls now captured instead of going to voicemail",
      ],
    },
    {
      type: "Pediatric Dentistry",
      location: "Family-focused practice with high call volume",
      challenge:
        "Parents calling after hours—often with anxious questions about their children—had no way to get immediate help or book appointments. Voicemail messages often led to missed callbacks.",
      solution:
        "FlossLine captures after-hours calls, answers common questions, and provides clear summaries each morning. For urgent situations, parents receive appropriate guidance and the team gets notified.",
      results: [
        "After-hours appointment requests now captured",
        "Reduced morning voicemail backlog",
        "Parents feel heard even outside office hours",
        "Emergency situations handled with appropriate urgency",
      ],
    },
    {
      type: "Multi-Location Practice",
      location: "Three offices across the same metropolitan area",
      challenge:
        "Inconsistent call handling across locations created patient confusion. Each office had different approaches to scheduling, leading to booking errors and frustrated patients.",
      solution:
        "FlossLine standardized call flows across all three locations while respecting each office's specific scheduling rules and provider availability.",
      results: [
        "Unified patient experience across all locations",
        "Location-specific routing working smoothly",
        "Centralized visibility into call performance",
        "Staff training simplified with consistent processes",
      ],
    },
    {
      type: "Growing Practice",
      location: "Recently expanded from one to two providers",
      challenge:
        "Adding a second provider meant more appointments to manage, but the same front desk capacity. Call wait times increased and patients started complaining.",
      solution:
        "FlossLine scaled with the practice, handling the increased call volume without requiring additional staff. Both providers' availability is managed seamlessly.",
      results: [
        "Absorbed increased call volume without new hires",
        "Provider-specific scheduling rules respected",
        "Patient satisfaction improved",
        "Front desk can focus on complex tasks",
      ],
    },
    {
      type: "Specialty Practice",
      location: "Oral surgery and implant center",
      challenge:
        "Complex scheduling requirements—different appointment types with varying durations—made phone-based booking error-prone. Staff spent significant time correcting scheduling mistakes.",
      solution:
        "FlossLine was configured with detailed appointment type rules, ensuring each booking includes the correct duration and preparation requirements.",
      results: [
        "Scheduling errors significantly reduced",
        "Correct appointment durations every time",
        "Patient prep instructions communicated consistently",
        "Staff time freed from correction work",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Customer Stories | FlossLine Success Stories</title>
        <meta
          name="description"
          content="Read how dental practices are using FlossLine to capture more appointments, reduce front desk overload, and improve patient experience."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Customer Stories
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Real practices, real results
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                See how dental offices like yours are using FlossLine to transform their phone operations.
              </p>
              <CTAButton size="lg" />
            </div>
          </div>
        </section>

        {/* Stories */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="bg-accent/50 p-6 lg:p-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{story.type}</h2>
                      <p className="text-muted-foreground text-sm">{story.location}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Challenge */}
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          The Challenge
                        </h3>
                        <p className="text-foreground leading-relaxed">{story.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          The Solution
                        </h3>
                        <p className="text-foreground leading-relaxed">{story.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                          The Results
                        </h3>
                        <ul className="space-y-2">
                          {story.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                              <span className="text-foreground text-sm">{result}</span>
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

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/80">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to write your own success story?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Book a demo and see how FlossLine can work for your practice.
            </p>
            <CTAButton
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              size="lg"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CustomerStories;