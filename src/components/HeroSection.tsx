import React from 'react';
import { ArrowRight, FileText, Send, MapPin } from 'lucide-react';
import { ProfilePortrait } from './ProfilePortrait';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
        {/* Intro */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#5ecf96]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#7f978d]">
              Personal Portfolio · 2026
            </span>
          </div>

          <h1
            id="hero-main-title"
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#f4f7f5] tracking-[-0.045em] leading-[0.98] mb-6"
          >
            Midhun <span className="text-[#5ecf96]">Balaji</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#dce7e2] font-medium tracking-tight mb-5 max-w-2xl">
            AI &amp; Computational Biology student who likes turning ideas into useful things.
          </p>

          <p className="text-base sm:text-lg text-[#9fb4aa] leading-8 max-w-2xl mb-8">
            I build projects across machine learning, computational biology, web development, and creative media. I care about making technology understandable, practical, and genuinely useful — not just impressive on a screen.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-9">
            <a
              href="#projects"
              id="hero-view-projects-btn"
              className="px-5 py-3 rounded-lg bg-[#5ecf96] text-[#07100b] font-medium text-sm hover:bg-[#72d8a4] transition-all flex items-center gap-2 shadow-lg shadow-[#5ecf96]/10"
            >
              View my work
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#about"
              className="px-5 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-[#dce7e2] font-medium text-sm hover:border-[#5ecf96]/40 hover:text-[#5ecf96] transition-all"
            >
              About me
            </a>

            <button
              id="hero-cv-btn"
              onClick={onOpenResume}
              className="px-5 py-3 rounded-lg border border-white/10 text-[#a9bdb4] hover:text-[#f4f7f5] hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <FileText className="w-4 h-4" />
              CV
            </button>

            <a
              href="#contact"
              id="hero-contact-btn"
              className="px-3 py-3 text-[#7f978d] hover:text-[#5ecf96] transition-colors flex items-center gap-1.5 text-sm"
            >
              <Send className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#81978e] border-t border-white/10 pt-6 w-full max-w-2xl">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#5ecf96]" />
              Puttaparthi, India
            </span>
            <span className="h-1 w-1 rounded-full bg-[#5c7068]" />
            <span>B.S. AI &amp; Computational Biology</span>
            <span className="h-1 w-1 rounded-full bg-[#5c7068]" />
            <span>Building &amp; learning</span>
          </div>
        </div>

        {/* Profile image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px]">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#5ecf96]/5 blur-2xl" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#10161a] shadow-2xl shadow-black/30">
              <div className="aspect-[4/5] overflow-hidden bg-[#e7ebee]">
                <ProfilePortrait className="h-full w-full object-cover" />
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-4 border-t border-white/10 bg-[#0d1317]">
                <div>
                  <p className="text-sm font-semibold text-[#f0f5f2]">Midhun Balaji</p>
                  <p className="text-xs text-[#7f978d] mt-1">AI · Biology · Web · Creative</p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#5ecf96]">Hello.</span>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 sm:-left-8 px-4 py-3 rounded-xl border border-white/10 bg-[#0d1317]/95 backdrop-blur-md shadow-xl">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#71867e] font-mono">Currently</p>
              <p className="text-sm text-[#dce7e2] mt-1">Learning · Building · Exploring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
