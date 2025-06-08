import { Coffee } from "./components/beverage";
import { SugarDecorator } from "./decorators/sugar_decorator";
import { MilkDecorator } from "./decorators/milk_decorator";

function main(): void {
  let beverage = new Coffee();
  console.log(`${beverage.getDescription()}: $${beverage.getCost()}`);

  beverage = new SugarDecorator(beverage);
  console.log(`${beverage.getDescription()}: $${beverage.getCost()}`);

  beverage = new MilkDecorator(beverage);
  console.log(`${beverage.getDescription()}: $${beverage.getCost()}`);
}

main();
