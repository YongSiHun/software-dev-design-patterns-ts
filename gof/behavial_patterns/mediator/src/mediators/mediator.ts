import { Colleague } from "../colleagues/colleague";

export interface Mediator {
  notify(sender: Colleague, event: string): void;
}
