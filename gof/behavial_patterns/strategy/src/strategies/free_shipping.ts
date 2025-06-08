import { ShippingStrategy } from "./shipping_strategy";

export class FreeShipping implements ShippingStrategy {
  calculateCost(weight: number): number {
    return 0; // 무료 배송
  }
}
