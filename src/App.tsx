import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// These IDs must match the wrappers below
const sectionIds = ['hero', 'about', 'experience', 'projects', 'education', 'contact'];

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Offset ensures it triggers before the section hits the very top
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    if (currentSectionIndex < sectionIds.length - 1) {
      const nextId = sectionIds[currentSectionIndex + 1];
      const element = document.getElementById(nextId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    // Standard wrapper without any scroll-snapping classes
    <div className="relative min-h-screen bg-[#090d12] text-gray-200">
      <Navbar />
      
      <main>
        <div id="hero"><HeroSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="experience"><ExperienceSection /></div>
        <div id="projects"><ProjectsSection /></div>
        <div id="education"><EducationSection /></div>
        <div id="contact"><ContactSection /></div>
      </main>

      <Footer />

      {/* Floating NEXT button on the bottom right */}
      {currentSectionIndex < sectionIds.length - 1 && (
        <button 
          onClick={scrollToNextSection}
          className="fixed bottom-8 right-8 z-50 px-6 py-2 bg-[rgba(72,187,120,0.1)] text-[#48bb78] border border-[rgba(72,187,120,0.2)] backdrop-blur-md font-mono text-sm tracking-wide rounded hover:bg-[rgba(72,187,120,0.2)] transition-all cursor-pointer"
        >
          Next &rarr;
        </button>
      )}
    </div>
  );
}

export default App;
