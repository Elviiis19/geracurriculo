import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const improveText = async (text: string, context: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key not found");
    return text;
  }

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      Você é um especialista em RH e currículos. Melhore o seguinte texto para um currículo profissional em português do Brasil.
      Contexto: ${context}.
      Mantenha o tom profissional, direto e focado em conquistas.
      Texto original: "${text}"
      
      Retorne APENAS o texto melhorado, sem explicações ou aspas.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text?.trim() || text;
  } catch (error) {
    console.error("Error improving text:", error);
    return text; // Return original text on failure
  }
};