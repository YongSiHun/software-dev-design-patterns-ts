import { Visitor } from "./visitor";
import { Circle } from "../elements/circle";
import { Rectangle } from "../elements/rectangle";

export class PerimeterCalculator implements Visitor {
  visitCircle(circle: Circle): void {
    const perimeter = 2 * Math.PI * circle.radius;
    console.log(`원의 둘레: ${perimeter.toFixed(2)}`);
  }

  visitRectangle(rectangle: Rectangle): void {
    const perimeter = 2 * (rectangle.width + rectangle.height);
    console.log(`사각형의 둘레: ${perimeter}`);
  }
}
