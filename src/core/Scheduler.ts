// Fixed-step scheduler, independent of rendering frequency.

export interface SimulationSystem {
  updateFixed(deltaSeconds: number): void;
}

export class Scheduler {
  private accumulator = 0;
  private readonly fixedStep = 1 / 60;
  private readonly maxSteps = 5;

  constructor(private readonly systems: SimulationSystem[]) {}

  advance(frameDeltaSeconds: number): number {
    // Avoid a huge catch-up after tab suspension.
    const safeDelta = Math.min(Math.max(frameDeltaSeconds, 0), 0.1);
    this.accumulator += safeDelta;

    let steps = 0;
    while (this.accumulator >= this.fixedStep && steps < this.maxSteps) {
      for (const system of this.systems) {
        system.updateFixed(this.fixedStep);
      }
      this.accumulator -= this.fixedStep;
      steps += 1;
    }

    // Drop excess backlog rather than freezing the browser.
    if (steps === this.maxSteps && this.accumulator > this.fixedStep * this.maxSteps) {
      this.accumulator = 0;
    }

    return steps;
  }
}
