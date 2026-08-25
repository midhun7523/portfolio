import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#5ecf96]/15 z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5ecf96] mb-3">
          <Briefcase className="w-4 h-4 text-[#5ecf96]" />
          Experience · Journey &amp; Milestones
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0faf5] tracking-tight leading-tight">
          Scientific Path &amp; <span className="text-[#5ecf96]">Academic Development</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-10 border-l border-[#5ecf96]/30 space-y-12 max-w-4xl">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full bg-[#080c10] border-2 border-[#5ecf96] flex items-center justify-center shadow-md shadow-[#5ecf96]/30 group-hover:scale-125 transition-transform">
              <span className="w-2 h-2 rounded-full bg-[#5ecf96]"></span>
            </div>

            {/* Content Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0e141b] border border-[#5ecf96]/20 hover:border-[#5ecf96]/50 transition-all shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs text-[#5ecf96] font-medium tracking-widest uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
                <span className="font-mono text-xs text-[#8ba79b] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#6e8c7e]" />
                  {exp.location}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f0faf5] mb-1">
                {exp.role}
              </h3>
              <div className="font-mono text-xs text-[#3a9eff] mb-4 font-medium">
                {exp.organization}
              </div>

              <p className="text-sm text-[#b8d4c7] leading-relaxed mb-5">
                {exp.description}
              </p>

              {exp.highlights && (
                <div className="space-y-2 mb-5 pt-3 border-t border-[#5ecf96]/15">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#d4e8df]">
                      <CheckCircle2 className="w-4 h-4 text-[#5ecf96] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#5ecf96]/10">
                {exp.skillsLearned.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-0.5 rounded bg-[#111820] border border-[#5ecf96]/15 font-mono text-[10px] text-[#8ba79b]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
