import { Builder } from "./builder";
import { Car } from "../products/car";

export class ConcreteCarBuilder implements Builder {
  private car!: Car;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setEngine(engine: string): void {
    this.car.engine = engine;
  }

  setWheels(wheels: number): void {
    this.car.wheels = wheels;
  }

  setColor(color: string): void {
    this.car.color = color;
  }

  getResult(): Car {
    const result = this.car;
    this.reset();  // 빌더 재사용 위해 초기화
    return result;
  }
}
