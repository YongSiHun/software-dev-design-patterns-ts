import { Car } from "../products/car";

export interface Builder {
  reset(): void;
  setEngine(engine: string): void;
  setWheels(wheels: number): void;
  setColor(color: string): void;
  getResult(): Car;
}
