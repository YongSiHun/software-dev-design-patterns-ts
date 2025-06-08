export abstract class Component {
  abstract operation(): string;

  add(component: Component): void {
    throw new Error("Unsupported operation.");
  }

  remove(component: Component): void {
    throw new Error("Unsupported operation.");
  }

  getChild(index: number): Component | null {
    throw new Error("Unsupported operation.");
  }
}
