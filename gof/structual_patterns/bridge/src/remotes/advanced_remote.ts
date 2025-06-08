import { Remote } from "./remote";

export class AdvancedRemote extends Remote {
  mute(): void {
    this.device.setVolume(0);
    console.log("Device muted.");
  }
}
