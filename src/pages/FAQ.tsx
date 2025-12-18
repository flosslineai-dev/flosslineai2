import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BOOKING_URL = "https://calendly.com/flosslineai/30min";

const FAQ = () => {
  const faqs = [
    {
      question: "Can FlossLine actually book appointments?",
      answer:
        "Yes. FlossLine integrates with your scheduling system and can book appointments directly based on your availability rules. It respects provider schedules, appointment durations, and any restrictions you've configured.",
    },
    {
      question: "What happens when someone calls with an emergency?",
      answer:
        "FlossLine is trained to recognize emergency situations. Depending on your configuration, it can provide appropriate guidance, notify your team immediately, or route the call to an on-call provider. You define the escalation rules.",
    },
    {
      question: "Can we customize scripts and office policies?",
      answer:
        "Absolutely. Every aspect of how FlossLine communicates can be tailored to your practice—from how it greets callers to how it handles specific scenarios. Your office policies become its operating rules.",
    },
    {
      question: "Do patients know they're talking to AI?",
      answer:
        "FlossLine is transparent when asked directly, but it's designed to provide a natural, helpful conversation—not to deceive. Most patients simply appreciate getting immediate assistance rather than waiting on hold.",
    },
    {
      question: "How do we review calls and see what happened?",
      answer:
        "Every call generates a summary with key details: who called, what they needed, and the outcome. You can also access full transcripts and listen to recordings. All of this is available in your FlossLine dashboard.",
    },
    {
      question: "How does the setup process work?",
      answer:
        "Setup is guided and collaborative. We help you configure your services, providers, hours, and rules. Then we test with sample calls before going live. Most practices are up and running within days, not weeks.",
    },
    {
      question: "Can FlossLine handle multiple locations?",
      answer:
        "Yes. Multi-location practices can use FlossLine across all offices with location-specific rules. Patients are routed to the right location, and each office can have its own scheduling parameters.",
    },
    {
      question: "What if FlossLine can't handle a particular request?",
      answer:
        "FlossLine knows when to hand off. Complex situations, sensitive topics, or anything you've marked as requiring human attention gets routed to your team with full context from the conversation.",
    },
    {
      question: "How does FlossLine handle new vs. existing patients?",
      answer:
        "FlossLine asks appropriate questions to determine if a caller is new or returning. New patients go through intake collection, while existing patients can be matched to their records for faster service.",
    },
    {
      question: "Can we use FlossLine only during certain hours?",
      answer:
        "Yes. You can configure FlossLine to handle calls 24/7, only after hours, only during peak times, or any schedule that works for your practice. Flexibility is built in.",
    },
    {
      question: "What happens to the data FlossLine collects?",
      answer:
        "Patient data is stored securely and is accessible through your dashboard. You control what happens with this information. We're committed to supporting privacy-focused workflows.",
    },
    {
      question: "How quickly can we make changes to our configuration?",
      answer:
        "Changes take effect immediately. Update your hours, add a new provider, or adjust scheduling rules—FlossLine adapts in real-time. No waiting for updates to deploy.",
    },
    {
      question: "Is there a long-term contract required?",
      answer:
        "We offer flexible arrangements. Book a demo to discuss what works best for your practice—we're focused on building relationships that last because FlossLine delivers value, not because you're locked in.",
    },
    {
      question: "What kind of support is available?",
      answer:
        "We provide hands-on support during setup and ongoing assistance as needed. Our team is available to help with configuration changes, troubleshooting, and optimization.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAQ | Common Questions About FlossLine</title>
        <meta
          name="description"
          content="Find answers to common questions about FlossLine AI receptionist: booking capabilities, emergency handling, customization, setup process, and more."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                FAQ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Frequently asked questions
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Everything you need to know about FlossLine. Can't find your answer? Book a demo and we'll help.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                      <div className="mt-4">
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium hover:underline text-sm"
                        >
                          Book a Demo →
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <SectionHeading
                title="Still have questions?"
                description="Book a demo and we'll answer everything. No pressure, just information."
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

export default FAQ;