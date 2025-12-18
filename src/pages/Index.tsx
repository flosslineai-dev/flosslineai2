import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import LogoStrip from "@/components/home/LogoStrip";
import WhyFlossLine from "@/components/home/WhyFlossLine";
import DeepDiveSection from "@/components/home/DeepDiveSection";
import TailoredSection from "@/components/home/TailoredSection";
import ControlCenterSection from "@/components/home/ControlCenterSection";
import AutomationGrid from "@/components/home/AutomationGrid";
import InsightsSection from "@/components/home/InsightsSection";
import OnboardingSection from "@/components/home/OnboardingSection";
import CustomerStoriesPreview from "@/components/home/CustomerStoriesPreview";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FlossLine | 24/7 AI Receptionist for Dental Offices</title>
        <meta
          name="description"
          content="FlossLine is a 24/7 AI receptionist for dental offices that answers calls instantly, books appointments, and captures intake details. Never miss a patient call again."
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <LogoStrip />
        <WhyFlossLine />
        <DeepDiveSection />
        <TailoredSection />
        <ControlCenterSection />
        <AutomationGrid />
        <InsightsSection />
        <OnboardingSection />
        <CustomerStoriesPreview />
        <FinalCTA />
      </Layout>
    </>
  );
};

export default Index;