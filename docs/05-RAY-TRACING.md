# 5. Ray tracing and ray queries

CIRRUS V2 uses the term **hybrid ray tracing** for a combination of rasterization and ray-based queries. The implementation must state exactly which kind of ray tracing is active.

## Ray method tiers

### Tier A — Screen-space ray marching

March a reflected or occlusion ray through the depth buffer. This is compatible with a broad range of GPU pipelines.

Limitations:
- Cannot hit off-screen objects.
- Cannot reliably see hidden geometry.
- Sensitive to depth-buffer precision and screen-space thickness.
- Needs edge handling and fallback shading.

### Tier B — Software ray tracing

Build a CPU- or GPU-managed acceleration structure, commonly a bounding volume hierarchy (BVH), over supported scene geometry. Trace selected rays against that structure.

Requirements:
- Explicit geometry update/refit strategy.
- Robust ray/AABB and ray/triangle intersection.
- Bounded traversal stack or a safe alternative.
- Defined handling for skinned/deformed geometry.
- Separate performance budget for structure construction and traversal.

### Tier C — Hardware ray tracing, if genuinely exposed

Use only if the browser API and device expose a supported hardware ray-tracing interface. Detect capability at runtime and verify the actual feature path. Do not infer support from WebGPU availability alone.

WebGL2 does not expose a hardware ray-tracing API. A WebGL2 fallback must use rasterization, screen-space methods or software ray tracing.

## Where to use rays

- Glossy reflections on selected materials.
- Contact shadows or short-range visibility.
- Diffuse indirect-light sampling at low rates.
- Water reflection/refraction support where screen-space data is insufficient.

## Denoising and temporal reuse

For stochastic rays, store:
- radiance estimate,
- hit distance,
- surface normal,
- motion vector,
- sample count/confidence,
- material/entity identifier.

Reject history when depth, normal, ID or motion disagreement exceeds defined thresholds. Clamp history to a neighbourhood of current-frame values to limit ghosting.

## Accuracy statement

Ray tracing is not automatically more realistic or faster than rasterization. Results depend on geometry representation, sampling, denoising, material models and workload. Benchmark each tier against a known reference scene.
