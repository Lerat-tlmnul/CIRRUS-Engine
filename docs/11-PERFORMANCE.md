# 11. Performance and adaptive quality

## Measure first

Track:
- CPU frame time.
- GPU frame time where timestamp queries are available.
- Simulation update time.
- Draw calls and triangles.
- GPU memory estimates.
- Resolution and active quality settings.

Do not guess GPU time from JavaScript frame duration.

## Adaptive controls

- Dynamic render resolution.
- Reflection resolution and update frequency.
- Ray count and ray distance.
- Shadow map resolution.
- Fluid simulation region and update rate.
- Temporal sample count.
- Distance-based level of detail and culling.

## Quality profiles

Profiles are policies, not fixed promises:

| Profile | Strategy |
|---|---|
| LOW | Raster baseline, analytic water, reduced shadows |
| MEDIUM | Lower-resolution SSR/AO, moderate shadows |
| HIGH | Full intended screen-space pipeline, temporal reuse |
| ULTRA | Higher sampling/resolution and selected software ray queries |
| EXTREME | Highest measured workload the device can sustain |

A profile must never activate an unsupported API feature.
