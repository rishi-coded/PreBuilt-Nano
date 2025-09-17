import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { ResultModal } from './components/ResultModal';
import { Loader } from './components/Loader';
import { editImage } from './services/geminiService';
import { EDIT_STYLES } from './constants';
import type { EditStyle } from './types';

const App: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [editedImageUrl, setEditedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleImageUpload = (file: File) => {
    setOriginalImage(file);
    setError(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      setOriginalImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleStyleSelect = useCallback(async (style: EditStyle) => {
    if (!originalImage || !originalImageUrl) {
      setError("Please upload an image first to apply a style.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImageUrl(null);

    try {
      const newImageUrl = await editImage(originalImage, style.prompt);
      if (newImageUrl) {
        setEditedImageUrl(newImageUrl);
        setIsModalOpen(true);
      } else {
        throw new Error("The AI model did not return an image. Please try a different style or image.");
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, originalImageUrl]);
  
  const closeModal = () => {
    setIsModalOpen(false);
    setEditedImageUrl(null);
  }

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar />
      <div className="flex-1 relative">
        <MainContent 
          onImageUpload={handleImageUpload}
          onStyleSelect={handleStyleSelect}
          styles={EDIT_STYLES}
          originalImage={originalImage}
          error={error}
          clearError={() => setError(null)}
        />
        {isLoading && <Loader />}
        {isModalOpen && originalImageUrl && editedImageUrl && (
          <ResultModal 
            originalUrl={originalImageUrl}
            editedUrl={editedImageUrl}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default App;