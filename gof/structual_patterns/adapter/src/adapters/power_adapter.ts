import { USSocket } from "../devices/us_socket";
import { EUPlug } from "../devices/eu_plug";

export class PowerAdapter {
  private usSocket: USSocket;

  constructor(usSocket: USSocket) {
    this.usSocket = usSocket;
  }

  adaptEUPlug(euPlug: EUPlug): string {
    const power = this.usSocket.providePower();
    const plugStatus = euPlug.connectToEuropeanSocket();
    return `Adapting power: ${power} -> ${plugStatus}`;
  }
}
