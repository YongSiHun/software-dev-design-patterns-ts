export interface Beverage {
  getDescription(): string;
  getCost(): number;
}

export class Coffee implements Beverage {
  getDescription(): string {
    return "Coffee";
  }

  getCost(): number {
    return 5;
  }
}
