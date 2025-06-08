export class PaymentService {
  processPayment(amount: number): boolean {
    console.log(`Processing payment of $${amount}`);
    return true;
  }
}
