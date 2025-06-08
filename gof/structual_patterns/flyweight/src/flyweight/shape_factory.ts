import { Shape } from "./shape";
import { Circle } from "./circle";

export class ShapeFactory {
  private static circleMap: Map<string, Shape> = new Map();

  static getCircle(color: string): Shape {
    let circle = this.circleMap.get(color);

    if (!circle) {
      circle = new Circle(color);
      this.circleMap.set(color, circle);
      console.log(`Creating circle of color: ${color}`);
    }

    return circle;
  }
}
