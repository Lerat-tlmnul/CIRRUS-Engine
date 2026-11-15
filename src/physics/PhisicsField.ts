// Minimal buoyancy-force helper for a prototype.
// A production implementation must account for hull volume, torque,
// water velocity, damping and stable integration.

export function estimateBuoyancyForce(
  submersionDepth: number,
  buoyancyCoefficient: number,
  maxDepth: number
): number {
  const depth = Math.max(0, Math.min(submersionDepth, maxDepth));
  return depth * buoyancyCoefficient;
}
