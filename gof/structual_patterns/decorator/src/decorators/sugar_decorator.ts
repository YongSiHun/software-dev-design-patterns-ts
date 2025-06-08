import { Beverage } from "../components/beverage";

export class SugarDecorator implements Beverage {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()} + Sugar`;
  }

  getCost(): number {
    return this.beverage.getCost() + 0.5;
  }
}
