import { Circle } from "../elements/circle";
import { Rectangle } from "../elements/rectangle";

export interface Visitor {
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
}
