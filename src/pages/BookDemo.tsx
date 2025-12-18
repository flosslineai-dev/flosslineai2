import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Settings, CheckCircle } from "lucide-react";

const BOOKING_URL = "https://calendly.com/flosslineai/30min";

const BookDemo = () => {
  const demoIncludes = [
    {
      icon: Phone,
      title: "Live call demonstration",
      description: "See FlossLine handle real dental call scenarios in real-time.",
    },
    {
      icon: Settings,
      title: "Custom configuration review",
      description: "We'll discuss how FlossLine would be configured for your specific practice.",
    },
    {
      icon: Calendar,
      title: "Suggested rollout plan",
      description: "Get a clear timeline for getting FlossLine up and running.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Book a Demo | FlossLine</title>
        <meta
          name="description"
          content="Book a FlossLine demo to see exactly how our AI receptionist handles real dental calls. Get a custom configuration review and rollout plan."
        />
      </Helmet>
      <Layout>
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-accent/50 min-h-[80vh]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="max-w-lg">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  Schedule a Demo
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Book a FlossLine Demo
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  See exactly how FlossLine handles real dental calls. We'll walk through a live demonstration tailored to your practice type.
                </p>

                {/* What's Included */}
                <div className="space-y-6 mb-10">
                  {demoIncludes.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 text-base"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  No commitment required—just information
                </p>
              </div>

              {/* Right Card */}
              <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Schedule Your Demo
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Click below to pick a time that works for you. We'll send a calendar invite with meeting details.
                  </p>

                  <Button asChild size="lg" className="w-full mb-6">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      View Available Times
                    </a>
                  </Button>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Demo calls typically last 20-30 minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BookDemo;
