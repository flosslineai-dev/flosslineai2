import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | FlossLine</title>
        <meta
          name="description"
          content="FlossLine Terms of Service - Terms and conditions for using our AI receptionist service for dental offices."
        />
      </Helmet>
      <Layout>
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing or using FlossLine's AI receptionist service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      FlossLine provides an AI-powered receptionist service designed specifically for dental offices. Our service handles inbound phone calls, schedules appointments, captures patient information, and performs related tasks as configured by your practice.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">User Responsibilities</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      As a user of our service, you agree to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Provide accurate information during setup and configuration</li>
                      <li>Maintain appropriate security for your account credentials</li>
                      <li>Use the service in compliance with all applicable laws</li>
                      <li>Review call summaries and take appropriate action as needed</li>
                      <li>Not use the service for any unlawful or prohibited purpose</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We strive to maintain high availability of our service but do not guarantee uninterrupted access. We may perform maintenance, updates, or experience outages that temporarily affect service availability. We will make reasonable efforts to notify you of planned maintenance.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All content, features, and functionality of FlossLine, including but not limited to software, text, graphics, and logos, are the exclusive property of FlossLine and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      FlossLine shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the service. Our total liability shall not exceed the amount you paid for the service in the twelve months preceding the claim.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer of Warranties</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the service will meet your requirements, be error-free, or be available without interruption.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Either party may terminate service in accordance with the terms of any applicable agreement. Upon termination, your access to the service will cease, and we may delete your data in accordance with our data retention policies.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website. Your continued use of the service after such changes constitutes acceptance of the new Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about these Terms of Service, please contact us through our website or book a demo to speak with our team.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Terms;
