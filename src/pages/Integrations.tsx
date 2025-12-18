import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import { Calendar, Database, FileText, Link as LinkIcon } from "lucide-react";

const Integrations = () => {
  const categories = [
    {
      icon: Calendar,
      title: "Scheduling & Calendar Tools",
      description: "Sync appointments directly with your scheduling system.",
      integrations: [
        { name: "Google Calendar", status: "Available" },
        { name: "Microsoft Outlook", status: "Available" },
        { name: "Calendly", status: "Available" },
      ],
    },
    {
      icon: Database,
      title: "Dental Practice Management",
      description: "Connect with your dental PMS for seamless data flow.",
      integrations: [
        { name: "Dentrix", status: "By Request" },
        { name: "Eaglesoft", status: "By Request" },
        { name: "Open Dental", status: "By Request" },
        { name: "Curve Dental", status: "By Request" },
      ],
      note: "PMS integrations depend on your specific system and requirements.",
    },
    {
      icon: FileText,
      title: "CRM & Forms",
      description: "Capture patient data and sync with your existing tools.",
      integrations: [
        { name: "Custom Webhooks", status: "Available" },
        { name: "Zapier", status: "Available" },
        { name: "HubSpot", status: "Available" },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Integrations | FlossLine Connects With Your Tools</title>
        <meta
          name="description"
          content="FlossLine integrates with your scheduling tools, dental PMS, and CRM systems. See available integrations or request a custom connection."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Integrations
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Works with the tools you already use
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                FlossLine connects with your existing systems to keep everything in sync—no manual data entry required.
              </p>
              <CTAButton size="lg" />
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {categories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.integrations.map((integration, intIndex) => (
                      <div
                        key={intIndex}
                        className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                              <LinkIcon className="w-5 h-5 text-accent-foreground" />
                            </div>
                            <span className="font-medium text-foreground">{integration.name}</span>
                          </div>
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              integration.status === "Available"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {integration.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {category.note && (
                    <p className="text-sm text-muted-foreground mt-4 italic">{category.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Don't See Your System */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <SectionHeading
                title="Don't see your system?"
                description="We're always adding new integrations. Book a demo and let us know what you're using—we'll work with you to find a solution."
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

export default Integrations;