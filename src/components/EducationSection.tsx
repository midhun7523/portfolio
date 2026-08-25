import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import { EDUCATIONS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#5ecf96]/15 z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5ecf96] mb-3">
          <GraduationCap className="w-4 h-4 text-[#5ecf96]" />
          Education · Academic Foundations
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0faf5] tracking-tight leading-tight">
          Rigorous Training in <span className="text-[#5ecf96]">AI &amp; Biological Science</span>
        </h2>
      </div>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EDUCATIONS.map((edu, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[#0e141b] border border-[#5ecf96]/20 hover:border-[#5ecf96]/50 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group"
          >
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5ecf96] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#5ecf96] font-medium tracking-widest uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.years}
                </span>
                <span className="font-mono text-[11px] text-[#6e8c7e] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#6e8c7e]" />
                  {edu.location.split(',')[0]}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f0faf5] mb-1">
                {edu.degree}
              </h3>
              <div className="font-mono text-xs text-[#3a9eff] mb-4 font-medium">
                {edu.institution}
              </div>

              <p className="text-xs sm:text-sm text-[#b8d4c7] leading-relaxed mb-6">
                {edu.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#5ecf96]/15">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#6e8c7e] mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#5ecf96]" />
                Key Focus Areas &amp; Coursework
              </div>
              <div className="flex flex-wrap gap-1.5">
                {edu.coreSubjects.map((sub) => (
                  <span
                    key={sub}
                    className="px-2 py-0.5 rounded bg-[#111820] border border-[#5ecf96]/15 font-mono text-[10px] text-[#d4e8df]"
                  >
                    {sub}
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
