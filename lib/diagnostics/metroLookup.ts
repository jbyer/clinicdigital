import zipTable from './zipToCbsa.json'

export interface Metro { name: string; population: number }

const table = zipTable as Record<string, Metro>

export function staticLookup(zip: string): Metro | null {
  return table[zip.slice(0, 3)] ?? null
}
