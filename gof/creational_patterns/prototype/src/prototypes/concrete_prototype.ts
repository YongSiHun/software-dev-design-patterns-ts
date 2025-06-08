import { Prototype } from "./prototype";

export class ConcretePrototype implements Prototype {
  constructor(public name: string, public attributes: Record<string, any>) {}

  clone(): ConcretePrototype {
    // 얕은 복사
    return new ConcretePrototype(this.name, { ...this.attributes });
  }
}
