import { Coffee } from "./beverages/coffee";
import { Tea } from "./beverages/tea";

const tea = new Tea();
console.log("=== 차 준비 ===");
tea.prepareRecipe();

const coffee = new Coffee();
console.log("\n=== 커피 준비 ===");
coffee.prepareRecipe();
