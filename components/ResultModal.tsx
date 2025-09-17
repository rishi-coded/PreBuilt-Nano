import React from 'react';

interface ResultModalProps {
  originalUrl: string;
  editedUrl: string;
  onClose: () => void;
}

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const ResultModal: React.FC<ResultModalProps> = ({ originalUrl, editedUrl, onClose }) => {
  return (
    <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
        onClick={onClose}
        aria-modal="true"
        role="dialog"
    >
      <div 
        className="bg-card-bg w-full max-w-4xl rounded-2xl shadow-soft p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Your AI-Styled Photo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold text-text-secondary">Original</h3>
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img src={originalUrl} alt="Original user upload" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold text-text-secondary">Edited</h3>
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img src={editedUrl} alt="AI-edited result" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};