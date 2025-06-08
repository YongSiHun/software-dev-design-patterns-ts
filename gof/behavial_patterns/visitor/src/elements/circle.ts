import { Shape } from "./shape";
import { Visitor } from "../visitors/visitor";

export class Circle implements Shape {
  constructor(public radius: number) {}

  accept(visitor: Visitor): void {
    visitor.visitCircle(this);
  }
}
