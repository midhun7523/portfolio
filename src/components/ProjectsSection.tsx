import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onOpenSevaDemo: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenSevaDemo }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ml' | 'bio' | 'web'>('all');
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ml') return p.category === 'ml';
    if (activeFilter === 'bio') return p.category === 'bio' || p.category === 'research';
    if (activeFilter === 'web') return p.category === 'web';
    return true;
  });

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#5ecf96]/15 z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5ecf96] mb-3">
            <span className="w-6 h-px bg-[#5ecf96]"></span>
            Projects · Research &amp; Builds
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0faf5] tracking-tight leading-tight">
            Scientific Inquiry &amp; <span className="text-[#5ecf96]">Engineering</span>
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all border cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#5ecf96] text-[#040a06] border-[#5ecf96] font-medium shadow-sm'
                : 'bg-[#111820] text-[#8ba79b] border-[#5ecf96]/15 hover:text-[#d4e8df] hover:border-[#5ecf96]/40'
            }`}
          >
            All ({PROJECTS.length})
          </button>
          <button
            onClick={() => setActiveFilter('ml')}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all border cursor-pointer ${
              activeFilter === 'ml'
                ? 'bg-[#5ecf96] text-[#040a06] border-[#5ecf96] font-medium shadow-sm'
                : 'bg-[#111820] text-[#8ba79b] border-[#5ecf96]/15 hover:text-[#d4e8df] hover:border-[#5ecf96]/40'
            }`}
          >
            Machine Learning
          </button>
          <button
            onClick={() => setActiveFilter('bio')}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all border cursor-pointer ${
              activeFilter === 'bio'
                ? 'bg-[#5ecf96] text-[#040a06] border-[#5ecf96] font-medium shadow-sm'
                : 'bg-[#111820] text-[#8ba79b] border-[#5ecf96]/15 hover:text-[#d4e8df] hover:border-[#5ecf96]/40'
            }`}
          >
            Comp Bio &amp; Research
          </button>
          <button
            onClick={() => setActiveFilter('web')}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all border cursor-pointer ${
              activeFilter === 'web'
                ? 'bg-[#5ecf96] text-[#040a06] border-[#5ecf96] font-medium shadow-sm'
                : 'bg-[#111820] text-[#8ba79b] border-[#5ecf96]/15 hover:text-[#d4e8df] hover:border-[#5ecf96]/40'
            }`}
          >
            Web Systems
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="group rounded-2xl bg-[#0e141b] border border-[#5ecf96]/20 hover:border-[#5ecf96]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#5ecf96]/10"
          >
            <div>
              {/* Card Header */}
              <div className="p-6 border-b border-[#5ecf96]/15 flex items-start justify-between gap-4 bg-[#111820]/60">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2 rounded-xl bg-[#090c10] border border-[#5ecf96]/25">
                    {project.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-[#f0faf5] group-hover:text-[#5ecf96] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#8ba79b]">{project.subtitle}</p>
                  </div>
                </div>

                {/* Status Badge */}
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded border font-semibold flex-shrink-0 ${
                    project.status === 'Live'
                      ? 'bg-[#5ecf96]/15 text-[#5ecf96] border-[#5ecf96]/40'
                      : 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-sm text-[#b8d4c7] font-sans leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3 rounded-xl bg-[#111820] border border-[#5ecf96]/15">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-base text-[#5ecf96] font-bold leading-none">
                        {metric.value}
                      </div>
                      <div className="font-mono text-[10px] uppercase text-[#6e8c7e] mt-1 tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-[#090c10] border border-[#5ecf96]/15 font-mono text-[11px] text-[#8ba79b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-[#5ecf96]/10 mt-2">
              <button
                onClick={() => setSelectedProjectModal(project)}
                className="font-mono text-xs uppercase tracking-wider text-[#d4e8df] hover:text-[#5ecf96] transition-colors flex items-center gap-1 cursor-pointer py-2"
              >
                Case Study Details
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                {project.hasInteractiveDemo && (
                  <button
                    onClick={onOpenSevaDemo}
                    className="px-3 py-1.5 rounded bg-[#5ecf96]/15 border border-[#5ecf96]/40 text-[#5ecf96] hover:bg-[#5ecf96]/25 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    Test Demo
                  </button>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded bg-[#5ecf96] text-[#040a06] font-mono text-xs uppercase font-medium tracking-wider hover:bg-[#4ebe85] transition-all flex items-center gap-1.5"
                  >
                    {project.linkLabel || 'Visit Live'}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Details Modal */}
      {selectedProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080c10]/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedProjectModal(null)}
        >
          <div
            className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#0e141b] border border-[#5ecf96]/30 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#111820] border border-[#5ecf96]/40 text-[#d4e8df] hover:text-[#5ecf96] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{selectedProjectModal.icon}</span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#f0faf5]">
                  {selectedProjectModal.title}
                </h3>
                <p className="font-mono text-xs text-[#5ecf96]">{selectedProjectModal.subtitle}</p>
              </div>
            </div>

            <div className="space-y-4 my-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-1">
                  Project Abstract &amp; Background
                </h4>
                <p className="text-sm text-[#b8d4c7] leading-relaxed">
                  {selectedProjectModal.longDescription || selectedProjectModal.description}
                </p>
              </div>

              {selectedProjectModal.keyFeatures && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-2">
                    Key Innovations &amp; Technical Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProjectModal.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#d4e8df]">
                        <CheckCircle2 className="w-4 h-4 text-[#5ecf96] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectModal.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#111820] border border-[#5ecf96]/30 font-mono text-xs text-[#5ecf96]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#5ecf96]/20">
              {selectedProjectModal.hasInteractiveDemo && (
                <button
                  onClick={() => {
                    setSelectedProjectModal(null);
                    onOpenSevaDemo();
                  }}
                  className="px-4 py-2 rounded bg-[#5ecf96]/15 border border-[#5ecf96] text-[#5ecf96] font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                >
                  Launch Interactive Simulator
                </button>
              )}

              {selectedProjectModal.link && (
                <a
                  href={selectedProjectModal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-[#5ecf96] text-[#040a06] font-mono text-xs uppercase font-semibold tracking-wider hover:bg-[#4ebe85] transition-all flex items-center gap-1.5"
                >
                  {selectedProjectModal.linkLabel || 'View Project Live'}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
