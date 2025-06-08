import { Shape } from "./shape";

export class Circle implements Shape {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  draw(color: string, x: number, y: number, radius: number): void {
    console.log(
      `Circle: Draw() [Color: ${this.color}, x: ${x}, y: ${y}, radius: ${radius}]`
    );
  }
}
