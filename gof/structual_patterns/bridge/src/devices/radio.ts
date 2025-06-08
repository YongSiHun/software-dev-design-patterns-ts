import { Device } from "./tv";

export class Radio implements Device {
  private enabled = false;
  private volume = 30;

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
    console.log("Radio is now ON.");
  }

  disable(): void {
    this.enabled = false;
    console.log("Radio is now OFF.");
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(value: number): void {
    this.volume = Math.min(100, Math.max(0, value));
    console.log(`Radio volume set to ${this.volume}.`);
  }
}
