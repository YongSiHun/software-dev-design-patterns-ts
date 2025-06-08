import { Circle } from "./elements/circle";
import { Rectangle } from "./elements/rectangle";
import { AreaCalculator } from "./visitors/area_calculator";
import { PerimeterCalculator } from "./visitors/perimeter_calculator";

const shapes = [
  new Circle(5),
  new Rectangle(4, 7),
];

const areaCalculator = new AreaCalculator();
const perimeterCalculator = new PerimeterCalculator();

shapes.forEach((shape) => {
  shape.accept(areaCalculator);
  shape.accept(perimeterCalculator);
});
