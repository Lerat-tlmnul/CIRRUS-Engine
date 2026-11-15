# 6. Lighting and materials

## Lighting

Support:
- Directional, point and spot lights.
- Physically based direct lighting (for example, a microfacet BRDF).
- Image-based environment lighting.
- Shadow maps with cascades for large outdoor scenes.
- Screen-space or probe-based indirect-light approximations.
- Optional ray-based visibility and indirect-light sampling.

## Materials

Minimum material properties:
- Base colour.
- Metallic.
- Roughness.
- Normal map.
- Emissive.
- Opacity.
- Transmission/IOR where supported.

Use a consistent energy-aware BRDF. Avoid adding arbitrary reflection brightness that violates material roughness or energy conservation.

## Water-specific response

Water needs Fresnel reflection, view-dependent reflection, depth-dependent absorption and a controlled refraction approximation. A single screen-space effect cannot provide complete underwater light transport.
