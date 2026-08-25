import React from 'react';
import { ArrowUp, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MbGuitarLogo } from './MbGuitarLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative border-t border-[#5ecf96]/15 bg-[#080c10] py-12 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5 text-lg text-[#f0faf5]">
            <div className="w-7 h-7 rounded-full border border-[#5ecf96]/40 flex items-center justify-center overflow-hidden bg-[#0c0e12]">
              <MbGuitarLogo size={28} />
            </div>
            <span className="font-bold">{PERSONAL_INFO.name}</span>
          </div>
          <p className="font-mono text-xs text-[#6e8c7e] mt-1">
            © 2026 Midhun Balaji · Sri Sathya Sai Institute of Higher Learning, Puttaparthi
          </p>
        </div>

        {/* Center Socials */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#111820] border border-[#5ecf96]/20 flex items-center justify-center text-[#8ba79b] hover:text-[#5ecf96] hover:border-[#5ecf96] transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#111820] border border-[#5ecf96]/20 flex items-center justify-center text-[#8ba79b] hover:text-[#5ecf96] hover:border-[#5ecf96] transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#111820] border border-[#5ecf96]/20 flex items-center justify-center text-[#8ba79b] hover:text-[#5ecf96] hover:border-[#5ecf96] transition-all"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[#111820] border border-[#5ecf96]/20 flex items-center justify-center text-[#8ba79b] hover:text-[#5ecf96] hover:border-[#5ecf96] transition-all"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Right back-to-top */}
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          className="font-mono text-xs text-[#8ba79b] hover:text-[#5ecf96] flex items-center gap-1.5 transition-colors cursor-pointer group"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-[#5ecf96]" />
        </button>
      </div>
    </footer>
  );
};
