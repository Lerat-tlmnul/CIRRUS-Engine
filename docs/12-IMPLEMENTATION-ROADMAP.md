# 12. Implementation roadmap

## Milestone 0 — Project foundation

- Define TypeScript interfaces.
- Add build, lint and type-check scripts.
- Create runtime lifecycle and resource disposal.
- Display a basic scene and a live performance panel.

**Done when:** the scene renders, resizes, handles disposal and reports frame time.

## Milestone 1 — Unified World State

- Stable entity IDs.
- Transform/material/light snapshots.
- Version counters and change events.
- Fixed-step scheduler.

**Done when:** physics and renderer consume the same coherent snapshot.

## Milestone 2 — Browser rendering baseline

- WebGPU renderer.
- WebGL2 fallback.
- Depth, normals and motion-vector data where supported.
- Capability report.

**Done when:** both backends render the same simple test scene with documented differences.

## Milestone 3 — Screen-space effects

- SSR.
- SSAO or GTAO-style approximation.
- Edge fade and fallback shading.
- Temporal validation.

**Done when:** artifacts are measured and known limitations are documented.

## Milestone 4 — Software ray queries

- Static-mesh BVH.
- Ray/AABB and ray/triangle tests.
- Reflection/visibility query prototype.
- Performance budget and correctness tests.

**Done when:** ray hits match a CPU reference on test geometry.

## Milestone 5 — Fluid/physics coupling

- Analytic ocean.
- Local wake field.
- Multi-point buoyancy.
- Shared surface sampling.

**Done when:** vessel motion responds consistently to waves and creates a visible wake.

## Milestone 6 — Temporal and adaptive systems

- History reprojection.
- Disocclusion rejection.
- Dynamic resolution.
- Quality controller.

**Done when:** camera motion does not create unacceptable persistent ghosting and quality adapts within defined limits.

## Milestone 7 — Validation and release

- Cross-browser testing.
- GPU/device-loss recovery.
- Performance baselines.
- Documentation of supported hardware and known issues.
