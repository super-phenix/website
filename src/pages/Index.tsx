import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PlatformSection from "@/components/PlatformSection";
import FeaturesSection from "@/components/FeaturesSection";
import InstallModesSection from "@/components/InstallModesSection";
import PillarsSection from "@/components/PillarsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import CredibilitySection from "@/components/CredibilitySection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background bg-grid-pattern">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <PlatformSection />
        <FeaturesSection />
        <InstallModesSection />
        <PillarsSection />
        <OpenSourceSection />
        <CredibilitySection />
        <EnterpriseSection />
        <FooterCTA />
      </div>
    </LanguageProvider>
  );
};

export default Index;
