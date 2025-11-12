import { Footer } from "@/components/Footer";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";

interface CaseStudiesPageProps {
  onDemoClick: () => void;
}

export function CaseStudiesPage({ onDemoClick }: CaseStudiesPageProps) {
  return (
    <>
      <main className="pt-20">
        <CaseStudiesSection />
      </main>

      <Footer />
    </>
  );
}
