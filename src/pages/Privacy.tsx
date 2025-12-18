import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | FlossLine</title>
        <meta
          name="description"
          content="FlossLine Privacy Policy - Learn how we collect, use, and protect your information when using our AI receptionist service."
        />
      </Helmet>
      <Layout>
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      FlossLine ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI receptionist service for dental offices.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We collect information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Contact information (name, email, phone number)</li>
                      <li>Practice information (office name, location, services)</li>
                      <li>Call recordings and transcripts</li>
                      <li>Appointment scheduling data</li>
                      <li>Patient information collected during calls (as directed by you)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Provide and maintain our AI receptionist service</li>
                      <li>Process appointments and patient inquiries</li>
                      <li>Improve our service through analysis and training</li>
                      <li>Communicate with you about your account and service</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your data at any time by contacting us.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may use third-party services to help us operate our service. These third parties have access to your information only to perform specific tasks on our behalf and are obligated to protect your information.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Depending on your location, you may have certain rights regarding your personal information, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Access to your personal information</li>
                      <li>Correction of inaccurate information</li>
                      <li>Deletion of your information</li>
                      <li>Data portability</li>
                      <li>Opt-out of certain uses of your information</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us through our website or book a demo to speak with our team.
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

export default Privacy;
