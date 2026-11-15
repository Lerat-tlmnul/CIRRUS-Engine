# 9. Temporal reconstruction

Temporal reuse improves stability and can reduce sampling cost, but incorrect reuse causes ghosting.

## Inputs

- Current colour.
- Depth.
- World-space or view-space normal.
- Motion vectors.
- Stable object/material identifier.
- Previous history buffers.

## Validation

Reject or reduce history weight when:
- Reprojected depth differs too much.
- Surface normal changes significantly.
- Object/material ID differs.
- Motion is invalid or disocclusion is detected.
- Camera cuts or major scene changes occur.

## Reconstruction

- Reproject previous colour.
- Clamp it to a current-frame neighbourhood.
- Blend using confidence and sample count.
- Reset history after resize, camera cut, device recovery or major world change.

Temporal reconstruction is not a substitute for missing geometry or correct lighting.
