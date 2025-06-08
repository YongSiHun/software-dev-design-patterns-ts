import { Mediator } from "./mediator";
import { Colleague } from "../colleagues/colleague";

export class ControlTower implements Mediator {
  private colleagues: Colleague[] = [];

  addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }

  notify(sender: Colleague, event: string): void {
    console.log(`관제탑: ${sender.constructor.name}가 '${event}' 요청을 보냈습니다.`);

    for (const colleague of this.colleagues) {
      if (colleague !== sender) {
        colleague.notify(event);
      }
    }
  }
}
