// Interface only: no ray-tracing backend is implemented here yet.
// Implement SSR, software BVH queries, or a verified hardware path separately.

export type Ray = {
  origin: [number, number, number];
  direction: [number, number, number];
  maxDistance: number;
};

export type RayHit = {
  hit: boolean;
  distance: number;
  primitiveId: number;
  normal: [number, number, number];
};

export interface RayQuerySystem {
  readonly mode: "screen-space" | "software-bvh" | "hardware";
  trace(ray: Ray): RayHit;
}
