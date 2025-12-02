export interface SearchParams {
  origin: string;
  destination: string;
  date: string;
  passengers: number;
  returnDate?: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface SearchResult {
  text: string;
  groundingChunks?: GroundingChunk[];
}

export interface Deal {
  id: number;
  destination: string;
  image: string;
  price: string;
  dates: string;
}

export interface CareerLink {
  name: string;
  region: string;
  url: string;
  description: string;
}

export enum AppState {
  IDLE,
  SEARCHING,
  RESULTS,
  ERROR,
  CAREERS
}