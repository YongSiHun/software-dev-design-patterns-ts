import { Visitor } from "./visitor";
import { Circle } from "../elements/circle";
import { Rectangle } from "../elements/rectangle";

export class AreaCalculator implements Visitor {
  visitCircle(circle: Circle): void {
    const area = Math.PI * Math.pow(circle.radius, 2);
    console.log(`원의 면적: ${area.toFixed(2)}`);
  }

  visitRectangle(rectangle: Rectangle): void {
    const area = rectangle.width * rectangle.height;
    console.log(`사각형의 면적: ${area}`);
  }
}
