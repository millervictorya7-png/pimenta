import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedPostContent } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateBlogContent = async (topic: string): Promise<GeneratedPostContent> => {
  const ai = getClient();
  
  const systemInstruction = `
    Você é o redator chefe e mestre churrasqueiro do "Espetinho do Pimenta", uma espetaria famosa pelo sabor autêntico, ambiente descontraído e molhos apimentados especiais.
    
    Escreva posts de blog envolventes, apetitosos e informativos em Português do Brasil.
    O tom deve ser amigável, apaixonado por carne e churrasco, mas também inclusivo para vegetarianos quando apropriado.
    Use emojis ocasionalmente para dar leveza.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Escreva um post de blog sobre: ${topic}. O post deve ter um título chamativo, um resumo curto e o conteúdo completo.`,
    config: {
      systemInstruction: systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "Um título chamativo para o post" },
          summary: { type: Type.STRING, description: "Um resumo de 2 linhas para o card do blog" },
          content: { type: Type.STRING, description: "O conteúdo completo do post, formatado com parágrafos." },
          tags: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "3 a 5 tags relacionadas ao post (ex: Churrasco, Dicas, Receitas)"
          }
        },
        required: ["title", "summary", "content", "tags"]
      }
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("No content generated");
  }

  return JSON.parse(text) as GeneratedPostContent;
};