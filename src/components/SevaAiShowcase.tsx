import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, RefreshCw, ExternalLink, Activity, Layers, ShieldCheck, Stethoscope } from 'lucide-react';
import { SEVA_DISEASES, SYMPTOM_OPTIONS } from '../data/portfolioData';
import { DiseaseRecord } from '../types';

export const SevaAiShowcase: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['fever', 'cough', 'fatigue']);
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [predictionResult, setPredictionResult] = useState<DiseaseRecord | null>(SEVA_DISEASES[0]);

  const handleToggleSymptom = (symptomId: string) => {
    let updated: string[];
    if (selectedSymptoms.includes(symptomId)) {
      updated = selectedSymptoms.filter((id) => id !== symptomId);
    } else {
      updated = [...selectedSymptoms, symptomId];
    }
    setSelectedSymptoms(updated);
    runInference(updated);
  };

  const handleQuickPreset = (preset: string[]) => {
    setSelectedSymptoms(preset);
    runInference(preset);
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setPredictionResult(null);
  };

  const runInference = (symptoms: string[]) => {
    if (symptoms.length === 0) {
      setPredictionResult(null);
      return;
    }

    setAnalyzing(true);
    setTimeout(() => {
      // Find best matching disease based on symptom overlap score
      let bestMatch: DiseaseRecord = SEVA_DISEASES[0];
      let highestScore = -1;

      for (const disease of SEVA_DISEASES) {
        const matches = disease.requiredSymptoms.filter((sym) => symptoms.includes(sym)).length;
        const score = (matches / Math.max(disease.requiredSymptoms.length, symptoms.length)) * 100;

        if (score > highestScore) {
          highestScore = score;
          bestMatch = disease;
        }
      }

      setPredictionResult(bestMatch);
      setAnalyzing(false);
    }, 300);
  };

  return (
    <div
      id="seva-ai-interactive-panel"
      className="rounded-2xl bg-[#0e141b] border border-[#5ecf96]/25 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
    >
      {/* Background Accent Mesh */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#5ecf96]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#5ecf96]/15 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#5ecf96]/10 border border-[#5ecf96]/30 text-[#5ecf96] font-mono text-xs uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5" />
            Ensemble ML Simulator
          </div>
          <h3 className="text-2xl sm:text-3xl text-[#f0faf5] font-bold">
            SEVA AI · <span className="text-[#5ecf96]">Early Disease Triage</span>
          </h3>
          <p className="text-sm text-[#8ba79b] mt-1 max-w-2xl">
            Trained on 4,920 patient instances across 41 disease classifications. Select clinical indicators below to test the weighted majority-vote fusion model in real-time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://seva-ai.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-[#5ecf96] text-[#040a06] font-mono text-xs uppercase font-semibold tracking-wider hover:bg-[#4ebe85] transition-all flex items-center gap-1.5 shadow-sm"
          >
            Open Live SEVA AI
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Symptom Selector */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <label className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e] flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-[#5ecf96]" />
              Select Patient Symptoms ({selectedSymptoms.length} active)
            </label>
            <button
              onClick={handleReset}
              className="font-mono text-xs text-[#8ba79b] hover:text-[#5ecf96] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              Clear
            </button>
          </div>

          {/* Quick clinical presets */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-[11px] text-[#6e8c7e]">Quick Presets:</span>
            <button
              onClick={() => handleQuickPreset(['fever', 'cough', 'fatigue', 'headache'])}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111820] hover:bg-[#5ecf96]/15 text-[#d4e8df] hover:text-[#5ecf96] border border-[#5ecf96]/20 transition-all cursor-pointer"
            >
              Respiratory Cluster
            </button>
            <button
              onClick={() => handleQuickPreset(['fever', 'joint_pain', 'fatigue', 'skin_rash', 'headache'])}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111820] hover:bg-[#5ecf96]/15 text-[#d4e8df] hover:text-[#5ecf96] border border-[#5ecf96]/20 transition-all cursor-pointer"
            >
              Arboviral / Dengue
            </button>
            <button
              onClick={() => handleQuickPreset(['cough', 'breathlessness', 'chest_tightness'])}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111820] hover:bg-[#5ecf96]/15 text-[#d4e8df] hover:text-[#5ecf96] border border-[#5ecf96]/20 transition-all cursor-pointer"
            >
              Bronchial Distress
            </button>
          </div>

          {/* Symptom Tag Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
            {SYMPTOM_OPTIONS.map((sym) => {
              const isSelected = selectedSymptoms.includes(sym.id);
              return (
                <button
                  key={sym.id}
                  id={`symptom-tag-${sym.id}`}
                  onClick={() => handleToggleSymptom(sym.id)}
                  className={`p-2.5 rounded-lg text-left text-xs font-sans flex items-center justify-between gap-2 border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#5ecf96]/15 border-[#5ecf96] text-[#f0faf5] font-medium shadow-sm shadow-[#5ecf96]/10'
                      : 'bg-[#111820] border-[#5ecf96]/15 text-[#8ba79b] hover:border-[#5ecf96]/40 hover:text-[#d4e8df]'
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <span>{sym.icon}</span>
                    <span className="truncate">{sym.label}</span>
                  </span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#5ecf96] flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Architecture Badge */}
          <div className="mt-5 p-3 rounded-lg bg-[#111820] border border-[#5ecf96]/15 flex items-center justify-between text-xs text-[#8ba79b]">
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#5ecf96]" />
              <span>Fusion: Random Forest (40%) + Naive Bayes (30%) + Decision Tree (30%)</span>
            </span>
            <span className="font-mono text-[#5ecf96] font-medium">96.0% Overall Acc</span>
          </div>
        </div>

        {/* Right Side: Prediction Output & Model Agreement Breakdown */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="font-mono text-xs uppercase tracking-wider text-[#6e8c7e] mb-3 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-[#5ecf96]" />
            Diagnostic Consensus &amp; Risk Triage
          </div>

          {predictionResult ? (
            <div className="h-full flex flex-col justify-between p-5 rounded-xl bg-[#111820] border border-[#5ecf96]/30 shadow-inner">
              <div>
                {/* Status Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs text-[#8ba79b]">Primary Predicted Condition:</span>
                  <span
                    className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded font-semibold ${
                      predictionResult.riskLevel === 'Critical'
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                        : predictionResult.riskLevel === 'Moderate'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-[#5ecf96]/20 text-[#5ecf96] border border-[#5ecf96]/40'
                    }`}
                  >
                    Risk: {predictionResult.riskLevel}
                  </span>
                </div>

                {/* Main Prediction Name */}
                <div className="font-serif text-2xl font-medium text-[#f0faf5] mb-2 flex items-center justify-between">
                  <span>{predictionResult.disease}</span>
                  <span className="font-mono text-lg text-[#5ecf96] font-normal">
                    {analyzing ? '...' : `${predictionResult.confidenceScore}%`}
                  </span>
                </div>

                {/* Clinical Summary */}
                <p className="text-xs text-[#b8d4c7] leading-relaxed mb-4">
                  {predictionResult.clinicalSummary}
                </p>

                {/* Model Agreement Breakdown */}
                <div className="p-3 rounded bg-[#090c10] border border-[#5ecf96]/15 mb-4">
                  <div className="font-mono text-[10px] text-[#6e8c7e] uppercase tracking-wider mb-2">
                    Ensemble Component Votes:
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between font-mono text-[11px] text-[#d4e8df] mb-1">
                        <span>Random Forest (Best Individual)</span>
                        <span className="text-[#5ecf96]">{predictionResult.modelVotes.randomForest}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#111820] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#5ecf96] rounded-full transition-all duration-500"
                          style={{ width: `${predictionResult.modelVotes.randomForest}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono text-[11px] text-[#d4e8df] mb-1">
                        <span>Naive Bayes Classifier</span>
                        <span className="text-[#3a9eff]">{predictionResult.modelVotes.naiveBayes}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#111820] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#3a9eff] rounded-full transition-all duration-500"
                          style={{ width: `${predictionResult.modelVotes.naiveBayes}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono text-[11px] text-[#d4e8df] mb-1">
                        <span>Decision Tree Classifier</span>
                        <span className="text-[#c8f0dd]">{predictionResult.modelVotes.decisionTree}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#111820] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#c8f0dd] rounded-full transition-all duration-500"
                          style={{ width: `${predictionResult.modelVotes.decisionTree}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Action Box */}
              <div className="pt-3 border-t border-[#5ecf96]/15 flex items-start gap-2 text-xs text-[#8ba79b]">
                <ShieldCheck className="w-4 h-4 text-[#5ecf96] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#d4e8df] font-medium">Protocol: </strong>
                  {predictionResult.recommendedAction}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-8 rounded-xl bg-[#111820] border border-[#5ecf96]/15 text-center">
              <AlertCircle className="w-8 h-8 text-[#6e8c7e] mb-2" />
              <div className="text-lg font-bold text-[#d4e8df]">No Symptoms Selected</div>
              <p className="text-xs text-[#6e8c7e] mt-1 max-w-xs">
                Pick one or more symptom indicators from the left column to compute the real-time ensemble diagnosis.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
