import SectionHeading from "@/components/shared/SectionHeading";
import { MessageSquare, FileText, Bell, CheckCircle, Clock, ArrowUpRight } from "lucide-react";

const ControlCenterSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Command Center"
          title="One place to review every call"
          description="Get complete visibility into every patient interaction. Call summaries, full transcripts, outcomes, and notifications—all in one clean dashboard."
          className="mb-16"
        />

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-secondary p-4 flex items-center justify-between">
              <span className="text-secondary-foreground font-semibold">Recent Calls</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-secondary-foreground/70 text-sm">Live</span>
              </div>
            </div>

            {/* Call List */}
            <div className="divide-y divide-border">
              {[
                {
                  caller: "Sarah M.",
                  time: "2 min ago",
                  outcome: "Appointment Booked",
                  type: "New Patient",
                  status: "success",
                },
                {
                  caller: "James T.",
                  time: "15 min ago",
                  outcome: "Message Taken",
                  type: "Existing Patient",
                  status: "pending",
                },
                {
                  caller: "Linda K.",
                  time: "1 hour ago",
                  outcome: "Follow-up Needed",
                  type: "Insurance Question",
                  status: "action",
                },
              ].map((call, index) => (
                <div key={index} className="p-4 lg:p-6 flex items-center justify-between hover:bg-accent/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{call.caller}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{call.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      {call.type}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        call.status === "success"
                          ? "bg-green-100 text-green-700"
                          : call.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {call.outcome}
                    </span>
                    <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-background p-4 flex items-center justify-between border-t border-border">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Full transcripts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Team notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Outcome tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlCenterSection;