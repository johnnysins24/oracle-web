const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface TarotCard {
  name_th: string;
  name_en: string;
  keywords?: string[];
}

export interface TarotResponse {
  interpretation: string;
  data: {
    cards: TarotCard[];
    spread_type: string;
    positions: string[];
  };
}

export interface ThaiResponse {
  interpretation: string;
  data: {
    year_animal: string;
    birth_day: string;
    lagna: string | null;
  };
}

// Tarot AI Reading
export async function getTarotReading(count: number = 3, question?: string): Promise<TarotResponse> {
  const res = await fetch(`${API_BASE}/v1/ai/tarot`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ count, question, lang: 'th' }),
  });
  
  if (!res.ok) throw new Error('Failed to get tarot reading');
  return res.json();
}

// Thai Fortune Reading
export async function getThaiReading(birthDate: string, birthTime?: string, question?: string): Promise<ThaiResponse> {
  const res = await fetch(`${API_BASE}/v1/ai/thai`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      birth_date: birthDate, 
      birth_time: birthTime,
      question 
    }),
  });
  
  if (!res.ok) throw new Error('Failed to get Thai reading');
  return res.json();
}

// Simple Tarot Draw (no AI)
export async function drawTarotCards(count: number = 1) {
  const res = await fetch(`${API_BASE}/test/draw/${count}`);
  if (!res.ok) throw new Error('Failed to draw cards');
  return res.json();
}

// Thai Naksat lookup
export async function getNaksat(birthYear: number) {
  const res = await fetch(`${API_BASE}/v1/thai/naksat?birth_year=${birthYear}`);
  if (!res.ok) throw new Error('Failed to get naksat');
  return res.json();
}
