import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/Navigation";
import { DemoModal } from "@/components/DemoModal";
import { LaunchModal } from "@/components/LaunchModal";
import { HomePage } from "@/pages/HomePage";
import { CaseStudiesPage } from "@/pages/CaseStudies";
import { CaseStudyDetailPage } from "@/pages/CaseStudyDetail";
// import { BlogsPage } from "@/pages/BlogsPage";
// import { BlogDetail } from "@/pages/BlogDetail";

function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [launchModalOpen, setLaunchModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[oklch(0.10_0.02_250)] via-[oklch(0.13_0.02_250)] to-[oklch(0.11_0.02_250)]">
        <Navigation onDemoClick={() => setDemoModalOpen(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onDemoClick={() => setDemoModalOpen(true)}
                onLaunchClick={() => setLaunchModalOpen(true)}
              />
            }
          />
          <Route
            path="/case-studies"
            element={
              <CaseStudiesPage onDemoClick={() => setDemoModalOpen(true)} />
            }
          />
          <Route
            path="/case-studies/:slug"
            element={
              <CaseStudyDetailPage onDemoClick={() => setDemoModalOpen(true)} />
            }
          />
          {/* <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} /> */}
        </Routes>

        <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
        <LaunchModal open={launchModalOpen} onOpenChange={setLaunchModalOpen} />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
