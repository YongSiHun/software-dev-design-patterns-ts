import { Colleague } from "./colleague";

export class Helicopter extends Colleague {
  notify(event: string): void {
    console.log(`헬리콥터: ${event} 메시지를 받았습니다.`);
  }

  requestTakeoff(): void {
    console.log("헬리콥터: 이륙 요청을 보냅니다.");
    this.mediator.notify(this, "이륙");
  }
}
