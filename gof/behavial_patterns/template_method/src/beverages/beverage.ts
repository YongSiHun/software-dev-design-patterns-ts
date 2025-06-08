export abstract class Beverage {
  // 템플릿 메서드
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  private boilWater(): void {
    console.log("물을 끓입니다.");
  }

  private pourInCup(): void {
    console.log("컵에 따릅니다.");
  }

  // 추상 메서드: 하위 클래스에서 구현
  protected abstract brew(): void;
  protected abstract addCondiments(): void;
}
