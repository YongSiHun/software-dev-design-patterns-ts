export interface ShippingStrategy {
  calculateCost(weight: number): number;
}
