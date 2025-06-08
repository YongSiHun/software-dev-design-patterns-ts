import { BaseHandler } from "./base_handler";
import { Request } from "../models/request";

export class AdminHandler extends BaseHandler {
  protected process(request: Request): boolean {
    if (request.type === "admin") {
      console.log(`관리자에서 요청 처리: ${request.message}`);
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
