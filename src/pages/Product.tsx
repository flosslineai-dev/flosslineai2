import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import { Check, Phone, Calendar, ClipboardList, Shield, Users, MessageSquare, Bell } from "lucide-react";

const Product = () => {
  const capabilities = [
    {
      icon: Phone,
      title: "New Patient Calls",
      description: "Warmly greet first-time callers, collect essential information, and guide them to book their first appointment—all without putting them on hold.",
    },
    {
      icon: Users,
      title: "Existing Patient Calls",
      description: "Recognize returning patients by name, quickly access their preferences, and handle scheduling changes with context-aware conversation.",
    },
    {
      icon: Bell,
      title: "Emergency Triage",
      description: "Identify urgent situations, provide appropriate guidance, and route emergencies to the right team member immediately.",
    },
    {
      icon: MessageSquare,
      title: "Common Questions",
      description: "Answer FAQs about office hours, location, accepted insurance, and services—reducing repetitive calls to your front desk.",
    },
  ];

  const schedulingFeatures = [
    "Book new appointments based on availability rules",
    "Reschedule existing appointments with confirmation",
    "Cancel appointments and offer rebooking options",
    "Respect provider-specific availability",
    "Handle appointment type durations automatically",
    "Send immediate booking confirmations",
  ];

  const intakeCapabilities = [
    "Patient name and contact information",
    "Date of birth for record matching",
    "Reason for visit or chief concern",
    "Preferred appointment times",
    "Insurance provider details",
    "New patient vs. returning status",
  ];

  const handoffRules = [
    { rule: "Complex billing questions", action: "Route to office manager" },
    { rule: "Medical emergencies", action: "Provide guidance + notify team" },
    { rule: "Specialist referral requests", action: "Queue for clinical staff" },
    { rule: "Insurance verification needed", action: "Create follow-up task" },
  ];

  return (
    <>
      <Helmet>
        <title>Product | FlossLine AI Receptionist for Dental Offices</title>
        <meta
          name="description"
          content="FlossLine AI receptionist handles new patients, existing patients, emergencies, and FAQs. Automated scheduling, intake capture, and intelligent handoffs."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Product
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                FlossLine AI Receptionist for Dental Offices
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                A voice-first AI assistant that answers every call, books appointments, captures patient information, and knows when to hand off to your team.
              </p>
              <CTAButton size="lg" />
            </div>
          </div>
        </section>

        {/* What It Handles */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading
              eyebrow="Capabilities"
              title="What FlossLine handles"
              description="From first-time callers to emergency situations, FlossLine manages the full range of patient phone interactions."
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <cap.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scheduling Capabilities */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionHeading
                  title="Scheduling that works the way you do"
                  description="FlossLine doesn't just take messages—it actively manages your appointment book according to your rules."
                  align="left"
                  className="mb-8"
                />

                <div className="space-y-4">
                  {schedulingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-foreground">Appointment Booked</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Patient</span>
                    <span className="text-foreground font-medium">New Patient</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Service</span>
                    <span className="text-foreground font-medium">Initial Exam + Cleaning</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Provider</span>
                    <span className="text-foreground font-medium">Dr. Martinez</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Date & Time</span>
                    <span className="text-foreground font-medium">Jan 15, 2:30 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Confirmation</span>
                    <span className="text-green-600 font-medium">Sent via SMS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intake Capture */}
        <section className="py-20 lg:py-28 bg-accent/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <ClipboardList className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-foreground">Intake Summary</span>
                  </div>
                  <div className="space-y-3">
                    {intakeCapabilities.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 py-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <SectionHeading
                  title="Capture intake details during the call"
                  description="Start every appointment with the information you need. FlossLine collects patient details naturally during the conversation, not through tedious forms."
                  align="left"
                  className="mb-8"
                />
                <p className="text-muted-foreground leading-relaxed">
                  All captured information syncs to your dashboard immediately, giving your team complete context before the patient even arrives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Handoff Rules */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading
              title="Smart handoffs when humans are needed"
              description="FlossLine knows its limits. When a situation requires human judgment, it routes appropriately and provides full context."
              className="mb-16"
            />

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="bg-secondary p-4">
                  <span className="text-secondary-foreground font-medium text-sm">Handoff Rules</span>
                </div>
                <div className="divide-y divide-border">
                  {handoffRules.map((item, index) => (
                    <div key={index} className="p-4 flex items-center justify-between">
                      <span className="text-foreground">{item.rule}</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {item.action}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built with privacy in mind
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                FlossLine is designed to support privacy-focused workflows. Patient data is handled securely, with access controls and audit trails to help you maintain compliance with your practice's privacy policies.
              </p>
              <CTAButton />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/80">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              See FlossLine in action
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Book a demo and see exactly how FlossLine handles real dental calls.
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

export default Product;
