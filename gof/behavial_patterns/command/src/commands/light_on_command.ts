import { Command } from "./command";
import { Light } from "../devices/light";

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
