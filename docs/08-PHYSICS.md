# 8. Physics Field

Physics must run on a fixed timestep, independent of render frame rate.

## Minimum model

- Rigid-body position, orientation, linear velocity and angular velocity.
- Gravity, buoyancy, drag and angular damping.
- Collision approximation for the hull and major obstacles.
- Multiple buoyancy sample points distributed along the hull.
- Stable integration, preferably semi-implicit Euler for a simple prototype.

## Buoyancy

At each sample point:
1. Query the shared fluid surface height and normal.
2. Estimate submersion depth.
3. Apply an upward force proportional to submersion, within a tuned range.
4. Apply drag relative to local water velocity.
5. Sum forces and torques.

This is an approximation, not a full computational fluid dynamics solver.

## Stability

- Clamp extreme impulses.
- Use a fixed simulation step and bounded catch-up count.
- Handle long tab suspension by resetting or carefully advancing simulation time.
- Test calm water, waves, impacts and low frame rates.
