import { ShoppingCart } from "./shopping_cart";
import { StandardShipping } from "./strategies/standard_shipping";
import { ExpressShipping } from "./strategies/express_shipping";
import { FreeShipping } from "./strategies/free_shipping";

const cart = new ShoppingCart(new StandardShipping());
const weight = 3; // 3kg

console.log(`표준 배송비: $${cart.calculateShipping(weight)}`);

cart.setStrategy(new ExpressShipping());
console.log(`빠른 배송비: $${cart.calculateShipping(weight)}`);

cart.setStrategy(new FreeShipping());
console.log(`무료 배송비: $${cart.calculateShipping(weight)}`);
