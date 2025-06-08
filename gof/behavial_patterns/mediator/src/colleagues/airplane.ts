import { Colleague } from "./colleague";

export class Airplane extends Colleague {
  notify(event: string): void {
    console.log(`항공기: ${event} 메시지를 받았습니다.`);
  }

  requestLanding(): void {
    console.log("항공기: 착륙 요청을 보냅니다.");
    this.mediator.notify(this, "착륙");
  }
}
