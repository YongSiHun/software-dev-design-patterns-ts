import { ShapeFactory } from "./flyweight/shape_factory";

function main(): void {
  const colors = ["Red", "Green", "Blue", "White", "Black"];

  for (let i = 0; i < 10; i++) {
    const color = colors[i % colors.length];
    const circle = ShapeFactory.getCircle(color);
    circle.draw(color, Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 10);
  }
}

main();
