import { PaymentService } from "../services/payment_service";
import { EmailService } from "../services/email_service";

export class OrderClient {
  private paymentService: PaymentService;
  private emailService: EmailService;

  constructor(paymentService: PaymentService, emailService: EmailService) {
    this.paymentService = paymentService;
    this.emailService = emailService;
  }

  placeOrder(orderId: string): void {
    this.paymentService.processPayment(orderId);
    this.emailService.sendConfirmationEmail(orderId);
  }
}
