import { describe, it, expect } from 'vitest'
import { staticLookup } from './metroLookup'

describe('staticLookup', () => {
  it('resolves a known 3-digit prefix to a metro', () => {
    const hit = staticLookup('75201')  // Dallas prefix 752 — confirmed exists in zipToCbsa.json
    expect(hit).not.toBeNull()
    expect(hit!.population).toBeGreaterThan(0)
  })
  it('returns null for an unknown prefix', () => {
    expect(staticLookup('00000')).toBeNull()
  })
})
