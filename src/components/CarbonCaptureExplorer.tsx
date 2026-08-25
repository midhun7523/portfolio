import React, { useState } from 'react';
import { Leaf, Cpu, GitBranch, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export const CarbonCaptureExplorer: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      title: 'Enzyme Kinetic In-Silico Modeling',
      short: 'Enzyme Kinetics',
      icon: <Zap className="w-4 h-4 text-[#5ecf96]" />,
      objective: 'Predict mutation effects on RuBisCO and Carbonic Anhydrase catalytic rate.',
      methodology:
        'Applying machine learning structural predictors to estimate active-site binding stability and CO2/O2 selectivity coefficients under fluctuating physiological temperatures.',
      keyMetrics: [
        { label: 'Enzyme Target', value: 'RuBisCO / CA' },
        { label: 'In-Silico Screening', value: '10,000+ Variants' },
        { label: 'Selectivity Gain', value: '+24% Predicted' },
      ],
      steps: [
        'Molecular dynamics simulation of wildtype vs mutant enzyme topologies',
        'Feature extraction of electrostatic surface potentials around catalytic cavities',
        'Ensemble regression predicting CO2 turnover rates (kcat / KM)',
      ],
    },
    {
      title: 'Metabolic Flux Balance Analysis (FBA)',
      short: 'Flux Balance',
      icon: <GitBranch className="w-4 h-4 text-[#5ecf96]" />,
      objective: 'Maximize metabolic throughput for carbon fixation in cyanobacteria.',
      methodology:
        'Using genome-scale metabolic reconstructions (COBRApy) paired with constrained optimization algorithms to reroute carbon intermediates toward high-density biomass accumulation.',
      keyMetrics: [
        { label: 'Host Organism', value: 'Synechococcus sp.' },
        { label: 'Reactions Modeled', value: '850+ Fluxes' },
        { label: 'Carbon Storage', value: 'Lipid / Starch Sinks' },
      ],
      steps: [
        'Stoichiometric matrix formulation of Calvin-Benson-Bassham cycle',
        'Linear programming optimization of objective biomass growth vectors',
        'Gene knockout impact analysis to prevent futile carbon recycling cycles',
      ],
    },
    {
      title: 'Bioreactor Environmental Modeling',
      short: 'Bioreactor Scaling',
      icon: <Cpu className="w-4 h-4 text-[#5ecf96]" />,
      objective: 'Optimize environmental parameter gradients in photobioreactors.',
      methodology:
        'Predictive neural networks simulate light penetration, pH equilibrium, and dissolved inorganic carbon (DIC) concentration profiles in continuous culture environments.',
      keyMetrics: [
        { label: 'CO2 Gradient', value: '0.04% – 15% Vol' },
        { label: 'Light Utilization', value: 'Dynamic PAR' },
        { label: 'System Type', value: 'Photobioreactor' },
      ],
      steps: [
        'Multi-variate regression for photokinetics and bio-fouling avoidance',
        'Real-time automated pH and sparging rate controller logic simulation',
        'Closed-loop carbon capture accounting and sequestration lifecycle calculation',
      ],
    },
  ];

  return (
    <section
      id="carbon-capture-research"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#5ecf96]/15 z-10"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5ecf96] mb-3">
            <Leaf className="w-4 h-4 text-[#5ecf96]" />
            Research Spotlight · Ecological AI
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0faf5] tracking-tight leading-tight">
            AI for Biological <span className="text-[#5ecf96]">Carbon Capture</span>
          </h2>
        </div>
        <p className="text-sm text-[#8ba79b] max-w-md">
          Combining computational biology with deep learning to model and engineer next-generation bio-sequestration systems.
        </p>
      </div>

      {/* Explorer Container */}
      <div className="rounded-2xl bg-[#0e141b] border border-[#5ecf96]/25 p-6 sm:p-8 shadow-2xl">
        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {stages.map((st, idx) => (
            <button
              key={st.title}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                activeStage === idx
                  ? 'bg-[#5ecf96]/15 border-[#5ecf96] text-[#f0faf5] shadow-sm shadow-[#5ecf96]/10'
                  : 'bg-[#111820] border-[#5ecf96]/15 text-[#8ba79b] hover:border-[#5ecf96]/40 hover:text-[#d4e8df]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#090c10] border border-[#5ecf96]/20">
                  {st.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#6e8c7e] tracking-wider">
                    Phase 0{idx + 1}
                  </div>
                  <div className="text-base font-bold leading-tight mt-0.5">
                    {st.short}
                  </div>
                </div>
              </div>
              <ArrowRight
                className={`w-4 h-4 transition-transform ${
                  activeStage === idx ? 'text-[#5ecf96] translate-x-1' : 'text-[#6e8c7e]'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Active Stage Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Objective & Workflow */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="font-mono text-xs text-[#5ecf96] uppercase tracking-wider">
                Phase 0{activeStage + 1} Focus
              </span>
              <h3 className="text-2xl sm:text-3xl text-[#f0faf5] font-bold mt-1">
                {stages[activeStage].title}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-[#111820] border border-[#5ecf96]/20">
              <div className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-1">
                Research Objective
              </div>
              <p className="text-sm text-[#f0faf5] font-medium leading-relaxed">
                {stages[activeStage].objective}
              </p>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-1">
                Algorithmic &amp; Biological Methodology
              </div>
              <p className="text-sm text-[#b8d4c7] leading-relaxed">
                {stages[activeStage].methodology}
              </p>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-2">
                Computational Pipeline Steps
              </div>
              <div className="space-y-2">
                {stages[activeStage].steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#d4e8df]">
                    <CheckCircle2 className="w-4 h-4 text-[#5ecf96] flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics & Technical Summary */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-[#111820] border border-[#5ecf96]/25 flex flex-col justify-between h-full">
            <div>
              <div className="font-mono text-xs text-[#6e8c7e] uppercase tracking-wider mb-4 pb-2 border-b border-[#5ecf96]/15">
                Modeled Parameters &amp; Targets
              </div>

              <div className="space-y-4">
                {stages[activeStage].keyMetrics.map((km) => (
                  <div
                    key={km.label}
                    className="p-3 rounded-lg bg-[#090c10] border border-[#5ecf96]/15 flex items-center justify-between"
                  >
                    <span className="font-mono text-xs text-[#8ba79b]">{km.label}</span>
                    <span className="text-base font-bold text-[#5ecf96]">{km.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#5ecf96]/15">
              <div className="font-mono text-[11px] text-[#8ba79b]">
                <strong className="text-[#d4e8df]">Affiliation:</strong> SSSIHL Department of Artificial Intelligence &amp; Computational Biology
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
