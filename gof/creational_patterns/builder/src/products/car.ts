export class Car {
  engine?: string;
  wheels?: number;
  color?: string;

  specification(): string {
    return `Engine: ${this.engine}, Wheels: ${this.wheels}, Color: ${this.color}`;
  }
}
