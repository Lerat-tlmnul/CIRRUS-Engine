# 3. Unified World State

The Unified World State (UWS) is the canonical description of the current simulated world.

## Required data

- Simulation tick and elapsed simulation time.
- Entity IDs and transforms.
- Geometry handles, bounds and visibility flags.
- Material parameters: base colour, roughness, metalness, transmission and opacity.
- Light parameters and environment state.
- Fluid surface parameters and interaction events.
- Camera matrices and previous-frame camera matrices.
- Change/version identifiers used to invalidate temporal history.

## Consistency rules

- Every entity has a stable ID during its lifetime.
- Transform changes increment a version.
- Geometry or material changes invalidate affected cached data.
- Renderers consume a snapshot, not mutable simulation objects.
- Missing optional data must have defined defaults.

## Example conceptual type

```ts
export interface WorldSnapshot {
  tick: number;
  simulationTime: number;
  entities: ReadonlyArray<EntitySnapshot>;
  lights: ReadonlyArray<LightSnapshot>;
  camera: CameraSnapshot;
  environment: EnvironmentSnapshot;
}
```

This is a contract example, not a complete serialization format. Add typed definitions for entity, light, camera and environment before implementing a production snapshot.
