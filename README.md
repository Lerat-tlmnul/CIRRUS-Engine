# CIRRUS V2
### Unified browser-first rendering and simulation architecture

**Status:** Architecture specification and implementation blueprint  
**Version:** 2.0.0  
**Target:** Modern browsers, WebGPU first, WebGL2 compatibility path

CIRRUS V2 is a proposed modular architecture for real-time interactive worlds. It coordinates rendering, lighting, materials, fluids, physics, spatial data and temporal reconstruction through a shared world state.

> CIRRUS V2 is a design and starter repository, not an already implemented commercial engine. The code in this repository defines the architecture, interfaces and implementation path. Rendering features become real only when their backend algorithms are implemented and tested.

## Goals

- One coherent world state shared by simulation and rendering systems.
- Hybrid lighting: rasterization, screen-space methods, software ray queries and optional hardware ray tracing where a supported API exists.
- Multi-scale water and fluid interaction.
- Deterministic fixed-step physics separated from frame rendering.
- Adaptive GPU workload and quality scaling.
- Temporal history with explicit validation and rejection.
- Browser-first operation with graceful fallback.

## Non-goals

- Guaranteeing zero bugs or a fixed frame rate on all devices.
- Claiming hardware ray tracing through WebGL2.
- Replacing every rendering technique with ray tracing.
- Treating screen-space reflections as physically complete reflections.
- Promising that one algorithm is universally better than path tracing.

## Architecture at a glance

```text
Application / Scene
       |
   CIRRUS Runtime
       |
  Unified World State
       |
  +----+---------+----------+-----------+
  |              |          |           |
Spatial       Physics     Fluids     Materials
  |              |          |           |
  +--------------+----------+-----------+
                 |
          Render Scheduler
                 |
       Hybrid Rendering Core
                 |
  Raster / SSR / SSGI / Ray Queries
                 |
       Temporal Reconstruction
                 |
        WebGPU or WebGL2
                 |
             Canvas
```

## Repository map

```text
CIRRUS-V2/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── docs/
│   ├── 01-VISION.md
│   ├── 02-ARCHITECTURE.md
│   ├── 03-UNIFIED-WORLD-STATE.md
│   ├── 04-HYBRID-RENDERING.md
│   ├── 05-RAY-TRACING.md
│   ├── 06-LIGHTING-MATERIALS.md
│   ├── 07-FLUIDS-OCEAN.md
│   ├── 08-PHYSICS.md
│   ├── 09-TEMPORAL-RECONSTRUCTION.md
│   ├── 10-BROWSER-PLATFORM.md
│   ├── 11-PERFORMANCE.md
│   ├── 12-IMPLEMENTATION-ROADMAP.md
│   └── 13-TESTING-BENCHMARKS.md
├── src/
│   ├── core/
│   │   ├── CIRRUS.ts
│   │   ├── WorldState.ts
│   │   └── Scheduler.ts
│   ├── rendering/
│   │   ├── HybridRenderer.ts
│   │   ├── RayQuerySystem.ts
│   │   └── TemporalHistory.ts
│   ├── fluids/
│   │   └── FluidField.ts
│   ├── physics/
│   │   └── PhysicsField.ts
│   └── platform/
│       └── Backend.ts
└── examples/
    └── README.md
```

## Recommended implementation order

1. Runtime, world state and fixed-step scheduler.
2. Basic WebGPU renderer and WebGL2 fallback.
3. Spatial depth and normal buffers.
4. Screen-space reflections and ambient occlusion.
5. Software ray queries against a simplified acceleration structure.
6. Temporal accumulation with disocclusion rejection.
7. Ocean surface and local interaction simulation.
8. Profiling, adaptive quality and regression tests.

## Important technical distinction

- **SSR:** traces rays against the current screen's depth buffer. It cannot see objects outside the view or hidden behind visible surfaces.
- **Software ray tracing:** traces rays against scene geometry represented in software structures such as a BVH. It can see beyond the current screen if the scene data is available.
- **Hardware ray tracing:** requires an API and device feature that explicitly exposes ray-tracing acceleration structures and dispatch. WebGL2 does not provide this. Do not label a software or screen-space method as hardware ray tracing.
- **Path tracing:** a more expensive stochastic global-illumination approach. It is not implied by the presence of ray queries.

## Getting started

This repository is currently a specification and TypeScript starter layout. It is not yet a runnable engine package. To build a working prototype, implement the interfaces in `src/` and connect them to a browser build system. Keep the first milestone deliberately small: render a scene, update a shared world state, and measure frame time before adding advanced effects.

See [the implementation roadmap](docs/12-IMPLEMENTATION-ROADMAP.md).
