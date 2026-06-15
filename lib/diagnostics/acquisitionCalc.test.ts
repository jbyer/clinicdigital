import { describe, it, expect } from 'vitest'
import { calcAcquisition } from './acquisitionCalc'

describe('calcAcquisition', () => {
  it('returns positive recoverable leads when below the local pack', () => {
    const r = calcAcquisition({ population: 1_000_000, position: 9, closeRatePct: 10, reportedLeads: 10 })
    expect(r.recoveredLeads).toBeGreaterThan(0)
    // metroSearches = (1_000_000 / 1_000_000) * 19915 = 19915
    expect(r.metroSearches).toBe(19915)
  })
  it('flags wordOfMouth when reported leads dwarf the model', () => {
    const r = calcAcquisition({ population: 100_000, position: 11, closeRatePct: 10, reportedLeads: 200 })
    expect(r.calibration).toBe('wordOfMouth')
  })
  it('reports 10+ competitors ahead for page 2+', () => {
    const r = calcAcquisition({ population: 1_000_000, position: 11, closeRatePct: 10, reportedLeads: 0 })
    expect(r.competitorsAhead).toBe('10+')
  })
})
