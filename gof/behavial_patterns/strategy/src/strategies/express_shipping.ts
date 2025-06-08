import { ShippingStrategy } from "./shipping_strategy";

export class ExpressShipping implements ShippingStrategy {
  calculateCost(weight: number): number {
    return weight * 10; // 1kg당 10달러
  }
}
