import React from 'react';
import type { EditStyle } from '../types';

interface StyleSelectorProps {
  styles: EditStyle[];
  onSelect: (style: EditStyle) => void;
  disabled: boolean;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({ styles, onSelect, disabled }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {styles.map((style) => (
        <div
          key={style.id}
          className="bg-card-bg rounded-xl shadow-soft p-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
        >
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">{style.name}</h3>
            <p className="text-sm text-text-secondary mb-4">{style.description}</p>
          </div>
          <button
            onClick={() => onSelect(style)}
            disabled={disabled}
            className="w-full mt-auto bg-gray-100 hover:bg-gray-200 text-text-primary font-bold py-2 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Try now
          </button>
        </div>
      ))}
    </div>
  );
};