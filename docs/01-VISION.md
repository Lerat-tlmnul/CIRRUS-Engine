1. Vision and design principles
CIRRUS V2 treats a real-time scene as one evolving world, not as unrelated visual effects. Lighting, water, materials, geometry and physics exchange data through explicit interfaces and a shared state.
Core principles
Shared reality: modules consume consistent transforms, material properties, geometry identifiers and simulation time.
Hybrid by design: choose the cheapest technique that meets the quality requirement for each effect.
Temporal responsibility: reuse previous frames only after validating that their data still describes the same visible surface.
Adaptive workload: spend computation where it produces measurable visual or physical benefit.
Browser constraints first: respect GPU limits, memory pressure, device loss, tab throttling and API availability.
Honest capability reporting: expose which algorithms are active rather than presenting a quality preset as proof of a feature.
V2 compared with the initial concept
V2 turns broad concepts such as Light Field and Fluid Field into explicit subsystems with data contracts, scheduling rules, fallback paths and test requirements. It does not claim that the design is already a finished engine.
