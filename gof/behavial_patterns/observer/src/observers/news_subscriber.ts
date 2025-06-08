import { Observer } from "./observer";

export class NewsSubscriber implements Observer {
  constructor(private name: string) {}

  update(news: string): void {
    console.log(`[${this.name}] 새 뉴스 알림: "${news}"`);
  }
}
