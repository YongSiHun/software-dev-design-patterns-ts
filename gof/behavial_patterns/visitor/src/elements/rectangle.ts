import { Shape } from "./shape";
import { Visitor } from "../visitors/visitor";

export class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  accept(visitor: Visitor): void {
    visitor.visitRectangle(this);
  }
}
