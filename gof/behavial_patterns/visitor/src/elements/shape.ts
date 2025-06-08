import { Visitor } from "../visitors/visitor";

export interface Shape {
  accept(visitor: Visitor): void;
}
