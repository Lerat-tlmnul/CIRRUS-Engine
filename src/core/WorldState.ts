// CIRRUS V2 — minimal world-state contracts.
// Expand these types as the implementation grows.

export type EntityId = number;

export interface TransformSnapshot {
  readonly position: readonly [number, number, number];
  readonly rotation: readonly [number, number, number, number];
  readonly scale: readonly [number, number, number];
  readonly version: number;
}

export interface EntitySnapshot {
  readonly id: EntityId;
  readonly transform: TransformSnapshot;
  readonly geometryId: number;
  readonly materialId: number;
}

export interface WorldSnapshot {
  readonly tick: number;
  readonly simulationTime: number;
  readonly entities: ReadonlyArray<EntitySnapshot>;
}

export class WorldState {
  private tick = 0;
  private simulationTime = 0;
  private entities: EntitySnapshot[] = [];

  publishStep(deltaSeconds: number, entities: EntitySnapshot[]): WorldSnapshot {
    this.tick += 1;
    this.simulationTime += deltaSeconds;
    this.entities = entities.slice();

    return Object.freeze({
      tick: this.tick,
      simulationTime: this.simulationTime,
      entities: Object.freeze(this.entities.slice())
    });
  }

  getSnapshot(): WorldSnapshot {
    return Object.freeze({
      tick: this.tick,
      simulationTime: this.simulationTime,
      entities: Object.freeze(this.entities.slice())
    });
  }
}
