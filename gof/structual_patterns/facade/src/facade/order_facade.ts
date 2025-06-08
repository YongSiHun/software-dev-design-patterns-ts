import { AuthService } from "../subsystems/auth_service";
import { PaymentService } from "../subsystems/payment_service";
import { ShippingService } from "../subsystems/shipping_service";

export class OrderFacade {
  private authService: AuthService;
  private paymentService: PaymentService;
  private shippingService: ShippingService;

  constructor() {
    this.authService = new AuthService();
    this.paymentService = new PaymentService();
    this.shippingService = new ShippingService();
  }

  placeOrder(userId: string, itemId: string, amount: number): boolean {
    if (!this.authService.authenticate(userId)) {
      console.log("Order failed: Authentication error.");
      return false;
    }

    if (!this.paymentService.processPayment(amount)) {
      console.log("Order failed: Payment error.");
      return false;
    }

    if (!this.shippingService.shipItem(itemId)) {
      console.log("Order failed: Shipping error.");
      return false;
    }

    console.log("Order placed successfully!");
    return true;
  }
}
