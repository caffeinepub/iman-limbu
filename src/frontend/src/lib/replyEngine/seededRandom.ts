export function seededRandom(seed: number): number {
  // Simple LCG (Linear Congruential Generator) for deterministic randomness
  const a = 1664525;
  const c = 1013904223;
  const m = Math.pow(2, 32);
  
  const next = (a * seed + c) % m;
  return next / m;
}

export function selectVariant<T>(variants: T[], seed: number): T {
  if (variants.length === 0) {
    throw new Error('Cannot select from empty variants array');
  }
  
  const random = seededRandom(seed);
  const index = Math.floor(random * variants.length);
  return variants[index];
}
