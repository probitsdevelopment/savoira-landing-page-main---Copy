import { Footer } from "@/components/Footer";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";

interface CaseStudiesPageProps {
  _onDemoClick?: () => void;
}

export function CaseStudiesPage({ _onDemoClick }: CaseStudiesPageProps) {
  return (
    <>
      <main className="pt-20">
        <CaseStudiesSection />
      </main>

      <Footer />
    </>
  );
}
