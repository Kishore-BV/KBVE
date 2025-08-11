import React from 'react';

interface ThemedModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ThemedModal = ({ open, onClose, children }: ThemedModalProps) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      style={{ background: 'rgba(10, 11, 30, 0.85)' }}
    >
      <div className="relative bg-background border border-primary/40 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-primary-foreground bg-primary/70 hover:bg-primary px-3 py-1 rounded-full text-sm font-bold shadow focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="p-0 sm:p-8">{children}</div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s cubic-bezier(0.4,0,0.2,1); }
      `}</style>
    </div>
  );
};
