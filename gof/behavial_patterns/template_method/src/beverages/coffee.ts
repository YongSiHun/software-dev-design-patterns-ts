import { Beverage } from "./beverage";

export class Coffee extends Beverage {
  protected brew(): void {
    console.log("커피를 내립니다.");
  }

  protected addCondiments(): void {
    console.log("설탕과 우유를 추가합니다.");
  }
}
