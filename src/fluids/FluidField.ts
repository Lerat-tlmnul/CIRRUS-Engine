// Minimal analytic Gerstner-wave sampling contract.
// This is a starting point, not a complete fluid solver.

export interface GerstnerWave {
  directionX: number;
  directionZ: number;
  amplitude: number;
  wavelength: number;
  speed: number;
  steepness: number;
}

export function sampleWaveHeight(
  x: number,
  z: number,
  time: number,
  waves: readonly GerstnerWave[]
): number {
  let height = 0;

  for (const wave of waves) {
    const length = Math.hypot(wave.directionX, wave.directionZ) || 1;
    const dx = wave.directionX / length;
    const dz = wave.directionZ / length;
    const k = (2 * Math.PI) / Math.max(wave.wavelength, 0.001);
    const phase = k * (dx * x + dz * z) - wave.speed * time;
    height += wave.amplitude * Math.sin(phase);
  }

  return height;
}
