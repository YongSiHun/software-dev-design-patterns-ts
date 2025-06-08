import { BaseHandler } from "./base_handler";
import { Request } from "../models/request";

export class TechSupportHandler extends BaseHandler {
  protected process(request: Request): boolean {
    if (request.type === "tech_support") {
      console.log(`기술 지원에서 요청 처리: ${request.message}`);
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
