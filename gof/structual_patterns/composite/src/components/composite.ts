import { Component } from "./component";

export class Composite extends Component {
  private children: Component[] = [];

  operation(): string {
    const results = this.children.map((child) => child.operation());
    return `Composite: [ ${results.join(", ")} ]`;
  }

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getChild(index: number): Component | null {
    return this.children[index] || null;
  }
}
