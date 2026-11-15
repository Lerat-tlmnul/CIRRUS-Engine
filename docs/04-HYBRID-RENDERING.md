# 4. Hybrid rendering core

CIRRUS V2 uses a render graph. Each pass declares inputs, outputs, resource formats and dependencies.

## Suggested pass sequence

1. Shadow maps / shadow representation.
2. Geometry pass: depth, normals, motion vectors and material identifiers.
3. Direct lighting.
4. Ambient occlusion.
5. Reflections.
6. Indirect-light approximation or ray-based lighting.
7. Transparent and water rendering.
8. Volumetric/atmospheric effects where affordable.
9. Temporal validation and reconstruction.
10. Tone mapping and presentation.

## Technique selection

- Rasterization is the baseline for visible geometry.
- Shadow maps are the baseline for real-time shadows.
- SSR is a low-cost reflection source for on-screen geometry.
- Planar reflection may be useful for large flat water surfaces.
- Software ray queries can handle selected off-screen visibility queries.
- Probe/radiance caches can amortize indirect lighting.
- Temporal reconstruction can reduce noise, but must reject invalid history.

Do not enable every pass by default. Select techniques based on device capability, scene complexity and measured frame budget.
