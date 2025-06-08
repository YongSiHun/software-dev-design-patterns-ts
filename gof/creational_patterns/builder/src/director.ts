import { Builder } from "./builders/builder";

export class Director {
  private builder!: Builder;

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  constructSportsCar(): void {
    this.builder.reset();
    this.builder.setEngine("V8");
    this.builder.setWheels(4);
    this.builder.setColor("Red");
  }

  constructSUV(): void {
    this.builder.reset();
    this.builder.setEngine("V6");
    this.builder.setWheels(4);
    this.builder.setColor("Black");
  }
}
