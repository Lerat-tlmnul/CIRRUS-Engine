# 13. Testing and benchmarks

## Correctness tests

- Ray/AABB and ray/triangle intersections against analytic cases.
- BVH results compared with brute-force triangle tests.
- Fixed-step simulation consistency at different render frame rates.
- Buoyancy in still water and controlled wave fields.
- Temporal rejection after camera cuts, object movement and disocclusion.
- Resource cleanup after resize and device loss.

## Visual test scenes

1. Glossy sphere over a checkerboard.
2. Rough metallic object under an HDR environment.
3. Thin geometry and screen edges for SSR failure cases.
4. Moving object crossing a static background for temporal ghosting.
5. Boat in calm water and then in multi-directional waves.
6. Transparent/refractive object with known limitations documented.

## Benchmark protocol

Record:
- Browser and version.
- OS and GPU.
- Backend and enabled features.
- Canvas resolution and device-pixel ratio.
- Scene complexity.
- Warm-up duration.
- Median and 95th-percentile frame time.
- CPU and GPU time separately when possible.

Compare CIRRUS settings against a baseline renderer at equal resolution and scene content. Never report “faster than ray tracing” without specifying the reference implementation and test conditions.
