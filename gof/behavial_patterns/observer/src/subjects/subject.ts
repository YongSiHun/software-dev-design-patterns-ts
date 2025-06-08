import { Observer } from "../observers/observer";

export interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(news: string): void;
}
