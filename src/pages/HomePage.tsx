import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { DemoModal } from "@/components/DemoModal";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { USPSection } from "@/components/sections/USPSection";
import { KaryaBoardSection } from "@/components/sections/KaryaBoardSection";
import { CoreFeaturesSection } from "@/components/sections/CoreFeaturesSection";
import { AIAdvantageSection } from "@/components/sections/AIAdvantageSection";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

interface HomePageProps {
  onDemoClick: () => void;
  onLaunchClick: () => void;
}

export function HomePage({ onDemoClick, onLaunchClick }: HomePageProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <main>
        <HeroSection
          onDemoClick={onDemoClick}
          onExploreClick={() => scrollToSection("features")}
          onLaunchClick={onLaunchClick}
        />
        <DashboardSection />
        <USPSection />
        <KaryaBoardSection />
        <CoreFeaturesSection />
        <AIAdvantageSection />
        <AnalyticsSection />
        <TrustSection />
        <CTASection onDemoClick={onDemoClick} />
      </main>

      <Footer />
    </>
  );
}
