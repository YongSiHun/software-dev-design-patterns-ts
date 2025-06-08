import { ShippingStrategy } from "./strategies/shipping_strategy";

/**
 * Context
 */
export class ShoppingCart {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  calculateShipping(weight: number): number {
    return this.strategy.calculateCost(weight);
  }
}
