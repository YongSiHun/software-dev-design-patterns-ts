import { Beverage } from "../components/beverage";

export class MilkDecorator implements Beverage {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()} + Milk`;
  }

  getCost(): number {
    return this.beverage.getCost() + 1.0;
  }
}
