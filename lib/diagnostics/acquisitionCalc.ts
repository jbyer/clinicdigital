import {
  MEDSPA_BASKET_PER_MILLION,
  CTR_BY_POSITION,
  LOCAL_PACK_TARGET_CTR,
  RESIDENTS_PER_MEDSPA,
} from "./acquisitionConstants";

export interface AcquisitionParams {
  population: number;
  position: number;
  closeRatePct: number;
  reportedLeads: number;
}

export interface AcquisitionResult {
  metroSearches: number;
  currentTraffic: number;
  topTraffic: number;
  recoveredLeads: number;
  modelLeads: number;
  estimatedCompetitors: number;
  competitorsAhead: string | number;
  calibration: string | null;
}

// All Spec 3 math lives here. `position` is numeric 1–11 (11 = page 2+).
export function calcAcquisition({ population, position, closeRatePct, reportedLeads }: AcquisitionParams): AcquisitionResult {
  const metroSearches = (population / 1_000_000) * MEDSPA_BASKET_PER_MILLION;
  const ctr = CTR_BY_POSITION[position] ?? CTR_BY_POSITION[11];
  const currentTraffic = metroSearches * ctr;
  const topTraffic = metroSearches * LOCAL_PACK_TARGET_CTR;
  const close = closeRatePct / 100;

  const recoveredLeads = Math.max(0, Math.round((topTraffic - currentTraffic) * close));
  const modelLeads = currentTraffic * close;
  const estimatedCompetitors = Math.max(1, Math.round(population / RESIDENTS_PER_MEDSPA));
  const competitorsAhead = position >= 11 ? "10+" : String(Math.max(0, position - 1));

  // Calibration vs. self-reported organic leads (spec: Calibration / Sanity Check).
  // Only fires when the larger side is ≥5 leads/month so tiny numbers stay quiet.
  let calibration: string | null = null;
  if (reportedLeads >= 5 && reportedLeads > 2 * modelLeads) {
    calibration = "wordOfMouth";
  } else if (modelLeads >= 5 && reportedLeads >= 1 && reportedLeads < 0.5 * modelLeads) {
    calibration = "conversionProblem";
  }

  return {
    metroSearches: Math.round(metroSearches),
    currentTraffic: Math.round(currentTraffic),
    topTraffic: Math.round(topTraffic),
    recoveredLeads,
    modelLeads: Math.round(modelLeads),
    estimatedCompetitors,
    competitorsAhead,
    calibration,
  };
}
