# 2. System architecture

## Runtime layers

- **Application layer:** creates entities, cameras, lights, materials and simulation settings.
- **Core layer:** owns lifecycle, world state, clocks, events and scheduling.
- **Simulation layer:** updates physics and fluids at fixed or controlled time steps.
- **Spatial layer:** maintains bounds, depth-related data and acceleration structures.
- **Rendering layer:** builds render passes and selects lighting/reflection techniques.
- **Temporal layer:** validates and accumulates history.
- **Platform layer:** detects WebGPU/WebGL2 capabilities and owns GPU resources.

## Frame lifecycle

```text
Input
  -> Accumulate elapsed time
  -> Fixed-step simulation updates
  -> Publish immutable render snapshot
  -> Update spatial structures
  -> Build render graph
  -> Execute geometry/depth passes
  -> Execute lighting and reflection passes
  -> Validate and reconstruct temporal history
  -> Present
  -> Collect GPU timings and adapt quality
```

Simulation must not read partially updated render data. Publish a coherent snapshot at a defined synchronization point.

## Module contract

Each module should expose:
- `initialize(context)`
- `update(deltaTime, worldState)` where applicable
- `buildPasses(renderGraph, snapshot)` where applicable
- `getStats()`
- `dispose()`

Avoid circular imports. Core owns interfaces; feature modules depend on core contracts, not on each other’s private implementation.
