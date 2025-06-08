import { OrderFacade } from "./facade/order_facade";

function main(): void {
  const orderFacade = new OrderFacade();

  console.log("\n=== Placing Order ===");
  orderFacade.placeOrder("user123", "item456", 99.99);
}

main();
