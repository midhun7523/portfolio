import React, { useState } from 'react';
import { Brain, Dna, Code2, Layers, CheckCircle2, GraduationCap, Calendar, Compass, Target } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const categoryIcons = [
    <Brain className="w-4 h-4 text-[#5ecf96]" key="brain" />,
    <Dna className="w-4 h-4 text-[#5ecf96]" key="dna" />,
    <Code2 className="w-4 h-4 text-[#5ecf96]" key="code" />,
    <Layers className="w-4 h-4 text-[#5ecf96]" key="layers" />,
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#5ecf96]/15 z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5ecf96] mb-3">
          <span className="w-6 h-px bg-[#5ecf96]"></span>
          About · Academic &amp; Research Focus
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0faf5] tracking-tight leading-tight">
          Where <span className="text-[#5ecf96]">Biology</span> Meets Computational Intelligence
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left narrative & skills */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="text-[#d4e8df] text-base sm:text-lg leading-relaxed space-y-4 font-normal">
            <p>
              I am currently pursuing a Bachelor of Science (B.S.) in <strong className="text-[#f0faf5] font-semibold">Artificial Intelligence and Computational Biology</strong> at the <strong className="text-[#5ecf96] font-semibold">Sri Sathya Sai Institute of Higher Learning (SSSIHL)</strong> in Puttaparthi, India.
            </p>
            <p className="text-[#b8d4c7]">
              My scientific focus sits at the convergence of statistical learning algorithms and molecular biosystems — building computational models that uncover complex biological patterns.
            </p>
            <p className="text-[#b8d4c7]">
              Whether developing multi-model clinical triage engines with 96% diagnostic accuracy (like <strong className="text-[#f0faf5] font-semibold">SEVA AI</strong>), e-commerce systems, or exploring biological carbon fixation pathways, I focus on turning algorithms into practical solutions.
            </p>
          </div>

          {/* Interactive Skill Matrices */}
          <div className="pt-6 border-t border-[#5ecf96]/15">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e]">
                Core Competencies &amp; Technical Tools
              </span>
              <span className="font-mono text-[11px] text-[#5ecf96]">Categories</span>
            </div>

            {/* Category Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`p-2.5 rounded-lg font-mono text-xs text-left transition-all border cursor-pointer flex items-center gap-2 ${
                    activeCategoryIndex === idx
                      ? 'bg-[#5ecf96]/15 border-[#5ecf96] text-[#f0faf5] font-medium shadow-sm shadow-[#5ecf96]/10'
                      : 'bg-[#111820] border-[#5ecf96]/15 text-[#8ba79b] hover:border-[#5ecf96]/40 hover:text-[#d4e8df]'
                  }`}
                >
                  {categoryIcons[idx]}
                  <span className="truncate">{cat.title.split('&')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Skills Pill Grid */}
            <div className="p-4 rounded-xl bg-[#111820] border border-[#5ecf96]/20">
              <div className="text-lg font-bold text-[#f0faf5] mb-3">
                {SKILL_CATEGORIES[activeCategoryIndex].title}
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#090c10] border border-[#5ecf96]/25 font-mono text-xs text-[#d4e8df] hover:border-[#5ecf96] hover:text-[#5ecf96] transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5ecf96]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Stats Grid & Key Pillars */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#111820] border border-[#5ecf96]/20 hover:border-[#5ecf96]/50 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#5ecf96]/10 border border-[#5ecf96]/30 flex items-center justify-center mb-3">
                <Calendar className="w-4 h-4 text-[#5ecf96]" />
              </div>
              <div className="text-3xl font-bold text-[#5ecf96] leading-none mb-1">2025</div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e]">University Onset</div>
              <p className="text-[11px] text-[#8ba79b] mt-1.5">Commenced B.S. at SSSIHL</p>
            </div>

            <div className="p-5 rounded-xl bg-[#111820] border border-[#5ecf96]/20 hover:border-[#5ecf96]/50 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#5ecf96]/10 border border-[#5ecf96]/30 flex items-center justify-center mb-3">
                <Compass className="w-4 h-4 text-[#5ecf96]" />
              </div>
              <div className="text-3xl font-bold text-[#5ecf96] leading-none mb-1">AI + Bio</div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e]">Specialization</div>
              <p className="text-[11px] text-[#8ba79b] mt-1.5">Machine Learning &amp; Genomics</p>
            </div>

            <div className="p-5 rounded-xl bg-[#111820] border border-[#5ecf96]/20 hover:border-[#5ecf96]/50 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#5ecf96]/10 border border-[#5ecf96]/30 flex items-center justify-center mb-3">
                <GraduationCap className="w-4 h-4 text-[#5ecf96]" />
              </div>
              <div className="text-3xl font-bold text-[#5ecf96] leading-none mb-1">B.S.</div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e]">Academic Degree</div>
              <p className="text-[11px] text-[#8ba79b] mt-1.5">4-Year Honours Program</p>
            </div>

            <div className="p-5 rounded-xl bg-[#111820] border border-[#5ecf96]/20 hover:border-[#5ecf96]/50 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#5ecf96]/10 border border-[#5ecf96]/30 flex items-center justify-center mb-3">
                <Target className="w-4 h-4 text-[#5ecf96]" />
              </div>
              <div className="text-3xl font-bold text-[#5ecf96] leading-none mb-1">2029</div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e]">Target Year</div>
              <p className="text-[11px] text-[#8ba79b] mt-1.5">Graduating Cohort</p>
            </div>
          </div>

          {/* Research Vision Callout */}
          <div className="p-5 rounded-xl bg-[#0e141b] border border-[#5ecf96]/25 relative overflow-hidden">
            <div className="font-mono text-xs text-[#5ecf96] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5ecf96]"></span>
              Guiding Principle
            </div>
            <p className="text-base text-[#f0faf5] font-normal leading-relaxed">
              &ldquo;Transforming molecular complexity into life-saving clarity through intelligent, reproducible computational models.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
