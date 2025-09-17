import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-brand-primary rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-text-primary animate-pulse-fast">AI is creating magic...</p>
      <p className="mt-1 text-sm text-text-secondary">This can take a moment.</p>
    </div>
  );
};