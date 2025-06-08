import { PaymentService } from "../services/payment_service";
import { EmailService } from "../services/email_service";
import { OrderClient } from "../clients/order_client";

export class ServiceInjector {
  static getOrderClient(): OrderClient {
    const paymentService = new PaymentService();
    const emailService = new EmailService();
    return new OrderClient(paymentService, emailService);
  }
}
