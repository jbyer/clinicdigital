// Source data: ClinicDigital_Website_Change_Recommendations.md — Separate Spec 3.
// All figures are estimates for a lead-magnet calculator, not precise market data.

// MedSpa "near me" keyword basket: ~6.57M US monthly searches across 10 high-intent
// terms, anchored to "botox near me" ≈ 2.4M/mo (SEMrush, 2025), expressed as
// searches per 1M US residents.
export const MEDSPA_BASKET_PER_MILLION = 19915;

// CTR by search position (First Page Sage / Advanced Web Ranking, 2025).
// Positions 1–3 use Google Local Pack CTR (local service searches surface the
// Maps 3-pack); 4–10 use organic CTR; 11 = page 2+ / not visible.
export const CTR_BY_POSITION: Record<number, number> = {
  1: 0.176, 2: 0.154, 3: 0.151,
  4: 0.072, 5: 0.051, 6: 0.044, 7: 0.030,
  8: 0.021, 9: 0.019, 10: 0.016,
  11: 0.004,
};

// Target = Local Pack position 1 (17.6%), deliberately conservative vs. the
// 39.8% organic #1 CTR given AI Overview suppression (see spec).
export const LOCAL_PACK_TARGET_CTR = CTR_BY_POSITION[1];

// 1 medspa per 37,000 residents — AMSPA 2025 national density estimate.
export const RESIDENTS_PER_MEDSPA = 37000;

// Share of all clicks captured by the Local 3-Pack — output copy only.
export const LOCAL_PACK_CLICK_SHARE = "46%";

export interface PositionChoice {
  id: string;
  label: string;
  position: number;
}

export interface PracticeType {
  id: string;
  label: string;
  enabled: boolean;
}

// Form select → representative numeric position for the CTR table.
// "I don't know" defaults to position 9 (conservative, per spec).
export const POSITION_CHOICES: PositionChoice[] = [
  { id: "top3",    label: "Top 3 in Maps",    position: 2 },
  { id: "p4_7",    label: "Position 4–7",     position: 5 },
  { id: "p8_10",   label: "Position 8–10",    position: 9 },
  { id: "page2",   label: "Page 2 or beyond", position: 11 },
  { id: "unknown", label: "I don't know",     position: 9 },
];

export const PRACTICE_TYPES: PracticeType[] = [
  { id: "medspa", label: "MedSpa / Medical Aesthetics",   enabled: true },
  { id: "dental", label: "Dental — coming soon",          enabled: false },
  { id: "chiro",  label: "Chiro / Wellness — coming soon", enabled: false },
];
