export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  rating: number;
  type: 'House' | 'Apartment' | 'Villa' | 'Penthouse' | 'Cottage' | 'Loft';
  description: string;
  amenities: string[];
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  image: string;
  isOnline: boolean;
}

export enum AppScreen {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  DETAILS = 'DETAILS',
  MAP = 'MAP',
  CHAT = 'CHAT',
  PROFILE = 'PROFILE'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'me' | 'other';
  time: string;
}
