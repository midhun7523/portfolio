import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SevaAiShowcase } from './components/SevaAiShowcase';
import { ProjectsSection } from './components/ProjectsSection';
import { CarbonCaptureExplorer } from './components/CarbonCaptureExplorer';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SevaAiDemoModal } from './components/SevaAiDemoModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [sevaDemoOpen, setSevaDemoOpen] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#080c10] text-[#d4e8df] relative overflow-x-hidden font-sans">
      {/* Subtle ambient background — intentionally kept simple and editorial. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_78%_18%,rgba(94,207,150,0.08),transparent_28%),radial-gradient(circle_at_15%_55%,rgba(255,255,255,0.025),transparent_30%)]"
      />

      {/* Fixed Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        {/* Hero Section */}
        <HeroSection onOpenResume={() => setResumeOpen(true)} />

        {/* About Section */}
        <AboutSection />

        {/* Highlight Section: In-Page SEVA AI Diagnostic Simulator */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <SevaAiShowcase />
        </section>

        {/* Projects Section */}
        <ProjectsSection onOpenSevaDemo={() => setSevaDemoOpen(true)} />

        {/* Carbon Capture Computational Biology Deep Dive */}
        <CarbonCaptureExplorer />

        {/* Education & Academic Credentials */}
        <EducationSection />

        {/* Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Modals */}
      <SevaAiDemoModal
        isOpen={sevaDemoOpen}
        onClose={() => setSevaDemoOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
