import React from 'react';
import { X } from 'lucide-react';
import { SevaAiShowcase } from './SevaAiShowcase';

interface SevaAiDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SevaAiDemoModal: React.FC<SevaAiDemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="seva-ai-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080c10]/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="seva-ai-modal-container"
        className="relative w-full max-w-5xl my-8 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-[#111820] border border-[#5ecf96]/40 text-[#d4e8df] hover:text-[#5ecf96] flex items-center justify-center cursor-pointer shadow-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <SevaAiShowcase />
      </div>
    </div>
  );
};
