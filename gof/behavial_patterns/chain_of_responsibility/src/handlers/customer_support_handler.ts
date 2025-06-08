import { BaseHandler } from "./base_handler";
import { Request } from "../models/request";

export class CustomerSupportHandler extends BaseHandler {
  protected process(request: Request): boolean {
    if (request.type === "customer_support") {
      console.log(`고객 지원에서 요청 처리: ${request.message}`);
      return true;
    }
    return false;
  }

  handle(request: Request): void {
    if (!this.process(request)) {
      super.handle(request);
    }
  }
}
