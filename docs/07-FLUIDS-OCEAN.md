# 7. Fluid Field and ocean simulation

Use a multi-scale model rather than simulating every water molecule.

## Global ocean

- Gerstner waves or a spectral wave model for large-scale surface shape.
- Multiple wave directions and wavelengths.
- Time-continuous displacement and surface normals.
- Wind direction and intensity parameters.

## Local interaction

- Local height/velocity field around the vessel.
- Wake and bow-wave disturbances.
- Buoyancy sampling at multiple hull points.
- Damping and drag approximations.
- Optional shallow-water solver for bounded local areas.

## Coupling

The vessel's transform and velocity feed the fluid interaction system. The fluid system returns surface height, normal and local flow estimates. Physics uses these values for buoyancy and drag. Rendering uses the same surface state for geometry, foam and reflection masks.

## Performance

- Keep the global wave model analytic where possible.
- Restrict expensive local simulation to a region around the vessel.
- Use lower update rates for distant or invisible fluid regions.
- Avoid CPU/GPU readbacks in the frame-critical path.
