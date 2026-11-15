# 10. Browser platform and backends

## WebGPU

Use WebGPU when available for explicit GPU resource management and compute workloads. Use WGSL for shaders. Check adapter/device availability and required limits at runtime.

WebGPU availability does not imply hardware ray-tracing support.

## WebGL2

Provide a reduced but functional fallback:
- Rasterized geometry.
- Shadow maps where supported.
- SSR/SSAO at reduced resolution.
- Analytic ocean waves.
- Simplified physics.
- No claim of hardware ray tracing.

## Browser realities

Account for:
- GPU device loss.
- WebGL context loss.
- Tab background throttling.
- Memory pressure.
- Canvas resize and device-pixel ratio.
- Unsupported extensions and format limits.
- Mobile thermal and power constraints.

## Single-file prototype

A one-file HTML demo may load Three.js or another library from a CDN, but it is not offline/self-contained unless dependencies are embedded or bundled. For maintainability, develop modules separately and bundle them into one HTML artifact only when needed.
