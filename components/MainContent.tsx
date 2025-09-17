import React from 'react';
import type { EditStyle } from '../types';
import { ImageUploader } from './ImageUploader';
import { Shortcuts } from './Shortcuts';
import { StyleSelector } from './StyleSelector';

interface MainContentProps {
    onImageUpload: (file: File) => void;
    onStyleSelect: (style: EditStyle) => void;
    styles: EditStyle[];
    originalImage: File | null;
    error: string | null;
    clearError: () => void;
}

export const MainContent: React.FC<MainContentProps> = ({ onImageUpload, onStyleSelect, styles, originalImage, error, clearError }) => {
    return (
        <main className="p-4 sm:p-6 lg:p-8 w-full h-full overflow-y-auto">
            <header>
                <h1 className="text-3xl font-bold text-text-primary">Create</h1>
            </header>
            
            <section className="mt-8">
                <ImageUploader onImageUpload={onImageUpload} originalImage={originalImage} />
                 {error && (
                    <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative" role="alert">
                        <strong className="font-bold">Error: </strong>
                        <span className="block sm:inline">{error}</span>
                        <button onClick={clearError} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                           <span className="text-2xl">×</span>
                        </button>
                    </div>
                )}
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-semibold text-text-primary mb-4">Shortcuts</h2>
                <Shortcuts />
            </section>
            
            <section className="mt-10">
                <h2 className="text-xl font-semibold text-text-primary mb-4">Ideas</h2>
                <StyleSelector styles={styles} onSelect={onStyleSelect} disabled={!originalImage} />
            </section>
        </main>
    );
};