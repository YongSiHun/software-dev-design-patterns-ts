import { Component } from "./component";

export class Leaf extends Component {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  operation(): string {
    return `Leaf: ${this.name}`;
  }
}
