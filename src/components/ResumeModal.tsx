import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EDUCATIONS, EXPERIENCES, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080c10]/95 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl my-8 rounded-2xl bg-[#0e141b] border border-[#5ecf96]/30 p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Controls */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#5ecf96]/20">
          <span className="font-mono text-xs text-[#5ecf96] uppercase tracking-wider">
            Academic Curriculum Vitae · Midhun Balaji
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#111820] border border-[#5ecf96]/30 text-[#d4e8df] hover:text-[#5ecf96] font-mono text-xs flex items-center gap-1.5 cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#111820] border border-[#5ecf96]/30 text-[#d4e8df] hover:text-[#5ecf96] flex items-center justify-center cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Sheet */}
        <div className="overflow-y-auto pr-2 space-y-6 text-[#d4e8df]">
          {/* Header Profile */}
          <div className="text-center pb-6 border-b border-[#5ecf96]/15">
            <h2 className="text-3xl sm:text-4xl text-[#f0faf5] font-bold">
              {PERSONAL_INFO.name}
            </h2>
            <div className="font-mono text-sm text-[#5ecf96] mt-1">
              B.S. in Artificial Intelligence &amp; Computational Biology
            </div>
            <div className="font-mono text-xs text-[#8ba79b] mt-1">
              {PERSONAL_INFO.institution} · {PERSONAL_INFO.location}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-3 font-mono text-xs text-[#b8d4c7]">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#5ecf96]" />
                {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#5ecf96]" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#5ecf96]" />
                Puttaparthi, India
              </span>
            </div>
          </div>

          {/* Statement */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#5ecf96] mb-1.5">
              Academic &amp; Research Profile
            </h3>
            <p className="text-xs sm:text-sm text-[#b8d4c7] leading-relaxed">
              Undergraduate student exploring predictive machine learning, biological sequence analysis, and web systems for healthcare and ecological applications.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#5ecf96] mb-3">
              Education
            </h3>
            <div className="space-y-3">
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#111820] border border-[#5ecf96]/15">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-base font-bold text-[#f0faf5]">{edu.degree}</div>
                      <div className="font-mono text-xs text-[#3a9eff]">{edu.institution}</div>
                    </div>
                    <span className="font-mono text-xs text-[#5ecf96]">{edu.years}</span>
                  </div>
                  <p className="text-xs text-[#b8d4c7] mt-1.5">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Key Projects */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#5ecf96] mb-3">
              Flagship Projects &amp; Research
            </h3>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-[#111820] border border-[#5ecf96]/15">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base font-bold text-[#f0faf5]">{proj.title}</span>
                    <span className="font-mono text-[10px] text-[#5ecf96] uppercase">{proj.status}</span>
                  </div>
                  <div className="font-mono text-xs text-[#6e8c7e] mb-1.5">{proj.subtitle}</div>
                  <p className="text-xs text-[#b8d4c7] mb-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#090c10] font-mono text-[10px] text-[#8ba79b]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#5ecf96] mb-2">
              Technical Skill Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 rounded-lg bg-[#111820] border border-[#5ecf96]/15">
                  <div className="font-mono text-xs text-[#f0faf5] font-medium mb-1.5">{cat.title}</div>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-[#090c10] font-mono text-[10px] text-[#5ecf96]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
