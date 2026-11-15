# Contributing to CIRRUS V2

## Before contributing

CIRRUS V2 is an architecture under development. Keep claims measurable and distinguish implemented features from planned features.

## Rules

- Prefer small modules with explicit inputs and outputs.
- Do not add a feature name without an implementation and a test.
- Never claim hardware ray tracing unless the active backend actually exposes it.
- Keep simulation time independent from render frame rate.
- Document quality/performance trade-offs.
- Provide a fallback path or clearly document unsupported devices.

## Pull request checklist

- [ ] Type checks pass.
- [ ] No browser-global assumptions in core modules.
- [ ] GPU resources have explicit creation and disposal paths.
- [ ] Feature is tested on its intended backend.
- [ ] Fallback behavior is documented.
- [ ] Performance impact is measured.
