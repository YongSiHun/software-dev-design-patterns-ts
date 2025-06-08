import { Mediator } from "../mediators/mediator";

export abstract class Colleague {
  constructor(protected mediator: Mediator) {}

  abstract notify(event: string): void;
}
