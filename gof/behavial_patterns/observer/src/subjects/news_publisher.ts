import { Subject } from "./subject";
import { Observer } from "../observers/observer";

export class NewsPublisher implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
    console.log(`구독자 추가됨.`);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
    console.log(`구독자 제거됨.`);
  }

  notify(news: string): void {
    console.log(`모든 구독자에게 뉴스 발송: "${news}"`);
    for (const observer of this.observers) {
      observer.update(news);
    }
  }
}
