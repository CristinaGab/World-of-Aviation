import { GoogleGenAI } from "@google/genai";
import { SearchParams, SearchResult } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const searchFlights = async (params: SearchParams): Promise<SearchResult> => {
  try {
    const prompt = `
      I need to find real-time flight options.
      Search for flights from ${params.origin} to ${params.destination} on ${params.date} for ${params.passengers} passenger(s).
      
      If a return date is provided (${params.returnDate}), include round-trip options.

      Please provide:
      1. A summary of the best available options (cheapest, fastest, best value).
      2. A detailed list of at least 3-5 specific flight options found. For each, include:
         - Airline
         - Departure/Arrival Times
         - Duration
         - Approximate Price
         - Layovers (if any)
      
      Format the output clearly using Markdown. Use bolding for prices and airlines.
      
      IMPORTANT: You must use the 'googleSearch' tool to find actual, current flight data. Do not make up prices.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        // responseMimeType is NOT allowed with googleSearch
      },
    });

    const text = response.text || "No results found.";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return {
      text,
      groundingChunks: groundingChunks.map(chunk => ({
        web: chunk.web ? { uri: chunk.web.uri, title: chunk.web.title } : undefined
      })).filter(c => c.web !== undefined)
    };

  } catch (error) {
    console.error("Flight search error:", error);
    throw new Error("Failed to search for flights. Please try again.");
  }
};