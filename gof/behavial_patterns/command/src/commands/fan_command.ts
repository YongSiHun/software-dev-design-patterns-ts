import { Command } from "./command";
import { Fan } from "../devices/fan";

export class FanCommand implements Command {
  constructor(private fan: Fan) {}

  execute(): void {
    this.fan.start();
  }

  undo(): void {
    this.fan.stop();
  }
}
