import { Request } from "../models/request";

export abstract class BaseHandler {
  private nextHandler?: BaseHandler;

  // 다음 핸들러 설정
  setNext(handler: BaseHandler): BaseHandler {
    this.nextHandler = handler;
    return handler;
  }

  // 요청 처리
  handle(request: Request): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    } else {
      console.log("요청을 처리할 수 없습니다.");
    }
  }

  protected abstract process(request: Request): boolean;
}
