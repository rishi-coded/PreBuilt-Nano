
import { GoogleGenAI, Modality, GenerateContentResponse } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const fileToGenerativePart = (file: File): Promise<{inlineData: {data: string, mimeType: string}}> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // The result includes the 'data:mime/type;base64,' prefix, which we need to remove.
      const base64Data = (reader.result as string).split(',')[1];
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      });
    };
    reader.readAsDataURL(file);
  });
};


export const editImage = async (imageFile: File, prompt: string): Promise<string | null> => {
  try {
    const imagePart = await fileToGenerativePart(imageFile);

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        parts: [
          imagePart,
          { text: prompt },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    // Find the first image part in the response
    if (response.candidates && response.candidates.length > 0) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData && part.inlineData.data) {
                const base64ImageBytes: string = part.inlineData.data;
                const mimeType: string = part.inlineData.mimeType;
                return `data:${mimeType};base64,${base64ImageBytes}`;
            }
        }
    }

    return null; // No image found in the response
  } catch (error) {
    console.error("Error editing image with Gemini API:", error);
    throw new Error("Failed to process image with the AI model. Please check the console for more details.");
  }
};
