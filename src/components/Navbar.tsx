import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MbGuitarLogo } from './MbGuitarLogo';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['hero', 'about', 'projects', 'carbon-capture-research', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#carbon-capture-research', label: 'Research', id: 'carbon-capture-research' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        id="main-nav-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090c10]/85 backdrop-blur-md border-b border-[#5ecf96]/15 shadow-lg shadow-black/40 py-3'
            : 'bg-[#090c10]/50 backdrop-blur-sm border-b border-[#5ecf96]/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            id="nav-logo-link"
            className="flex items-center gap-3 group text-decoration-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5ecf96]/50 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full border border-[#5ecf96]/40 flex items-center justify-center group-hover:border-[#5ecf96] group-hover:scale-105 transition-all shadow-sm shadow-[#5ecf96]/10 overflow-hidden bg-[#0c0e12]">
              <MbGuitarLogo size={40} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#f0faf5] tracking-wide group-hover:text-[#5ecf96] transition-colors leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-[#6e8c7e] tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5ecf96] animate-pulse"></span>
                AI · Computational Biology
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      id={`nav-link-${link.id}`}
                      className={`font-mono text-xs uppercase tracking-widest transition-all py-1 px-1 relative ${
                        isActive
                          ? 'text-[#5ecf96] font-medium'
                          : 'text-[#8ba79b] hover:text-[#d4e8df]'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5ecf96] rounded-full"></span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 pl-4 border-l border-[#5ecf96]/20">
              <button
                id="nav-resume-btn"
                onClick={onOpenResume}
                className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded border border-[#6e8c7e]/30 text-[#d4e8df] hover:border-[#5ecf96]/60 hover:text-[#5ecf96] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#6e8c7e]" />
                CV
              </button>

              <a
                href="#contact"
                id="nav-contact-cta"
                className="font-mono text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded bg-[#5ecf96] text-[#040a06] font-medium hover:bg-[#4ebe85] transition-all shadow-sm shadow-[#5ecf96]/20 flex items-center gap-1.5"
              >
                <Send className="w-3 h-3" />
                Connect
              </a>
            </div>
          </nav>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#6e8c7e] hover:text-[#5ecf96] focus:outline-none focus:ring-2 focus:ring-[#5ecf96]/40 rounded-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#090c10]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-7 px-6 lg:hidden animate-in fade-in duration-200"
        >
          <div className="w-full max-w-sm flex flex-col items-center gap-5">
            <div className="w-16 h-16 rounded-full border-2 border-[#5ecf96]/60 flex items-center justify-center mb-2 shadow-lg shadow-[#5ecf96]/20 overflow-hidden bg-[#0c0e12]">
              <MbGuitarLogo size={64} />
            </div>
            <div className="text-center mb-4">
              <div className="text-2xl font-medium text-[#f0faf5]">{PERSONAL_INFO.name}</div>
              <div className="font-mono text-xs text-[#6e8c7e] mt-1">{PERSONAL_INFO.institution}</div>
            </div>

            <nav className="w-full flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-center py-2 text-[#d4e8df] hover:text-[#5ecf96] border-b border-[#5ecf96]/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="w-full flex flex-col gap-3 mt-4 pt-4 border-t border-[#5ecf96]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded border border-[#6e8c7e]/40 text-[#d4e8df] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#5ecf96]" />
                View Resume / Academic Profile
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded bg-[#5ecf96] text-[#040a06] font-mono text-xs uppercase font-semibold tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
