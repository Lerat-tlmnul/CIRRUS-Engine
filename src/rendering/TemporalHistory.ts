// Minimal policy contract for temporal history validation.

export interface HistorySample {
  depth: number;
  normal: [number, number, number];
  objectId: number;
  valid: boolean;
}

export function shouldRejectHistory(
  current: HistorySample,
  previous: HistorySample,
  depthThreshold: number,
  normalThreshold: number
): boolean {
  if (!current.valid || !previous.valid) return true;
  if (current.objectId !== previous.objectId) return true;
  if (Math.abs(current.depth - previous.depth) > depthThreshold) return true;

  const dot =
    current.normal[0] * previous.normal[0] +
    current.normal[1] * previous.normal[1] +
    current.normal[2] * previous.normal[2];

  return dot < normalThreshold;
}
