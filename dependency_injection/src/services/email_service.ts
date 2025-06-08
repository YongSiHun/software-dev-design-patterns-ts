export class EmailService {
  sendConfirmationEmail(orderId: string): void {
    console.log(`Sending confirmation email for order ID: ${orderId}`);
  }
}
