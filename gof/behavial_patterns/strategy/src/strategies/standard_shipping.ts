import { ShippingStrategy } from "./shipping_strategy";

export class StandardShipping implements ShippingStrategy {
  calculateCost(weight: number): number {
    return weight * 5; // 1kg당 5달러
  }
}
