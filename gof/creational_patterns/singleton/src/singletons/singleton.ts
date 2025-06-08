export class Singleton {
  private static instance: Singleton;

  // 외부에서 인스턴스 생성 금지
  private constructor(public name: string) {}

  static getInstance(name: string): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(name);
    }
    return Singleton.instance;
  }

  sayHello(): void {
    console.log(`Hello from ${this.name}!`);
  }
}
