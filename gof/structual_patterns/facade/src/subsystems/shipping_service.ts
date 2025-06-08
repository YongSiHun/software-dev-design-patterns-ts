export class ShippingService {
  shipItem(itemId: string): boolean {
    console.log(`Shipping item ${itemId}`);
    return true;
  }
}
