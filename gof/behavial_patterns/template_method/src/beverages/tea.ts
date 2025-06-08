import { Beverage } from "./beverage";

export class Tea extends Beverage {
  protected brew(): void {
    console.log("차를 우려냅니다.");
  }

  protected addCondiments(): void {
    console.log("레몬을 추가합니다.");
  }
}
