import React, { useState, useCallback } from 'react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  originalImage: File | null;
}

const UploadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
);

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, originalImage }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0]);
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (e.dataTransfer.files[0].type.startsWith('image/')) {
        onImageUpload(e.dataTransfer.files[0]);
      }
    }
  }, [onImageUpload]);

  return (
    <div className="bg-card-bg p-6 rounded-2xl shadow-soft">
      <div className="flex items-center space-x-6">
        {originalImage && (
            <div className="w-32 h-32 flex-shrink-0">
                <img src={URL.createObjectURL(originalImage)} alt="Uploaded preview" className="w-full h-full object-cover rounded-xl"/>
            </div>
        )}
        <label
          htmlFor="image-upload"
          className={`relative flex-grow h-32 w-full border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors duration-300 flex flex-col items-center justify-center ${isDragging ? 'border-brand-primary bg-blue-50' : 'border-border-color hover:border-brand-primary'}`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center justify-center space-y-2 text-text-secondary">
            <UploadIcon className="w-8 h-8"/>
            <p className="font-semibold">
              <span className="text-brand-primary">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs">PNG, JPG, WEBP</p>
          </div>
        </label>
      </div>
    </div>
  );
};