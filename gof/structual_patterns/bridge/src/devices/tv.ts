export interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(value: number): void;
}

export class TV implements Device {
  private enabled = false;
  private volume = 50;

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
    console.log("TV is now ON.");
  }

  disable(): void {
    this.enabled = false;
    console.log("TV is now OFF.");
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(value: number): void {
    this.volume = Math.min(100, Math.max(0, value));
    console.log(`TV volume set to ${this.volume}.`);
  }
}
