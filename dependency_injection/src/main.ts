import { ServiceInjector } from "./injectors/service_injector";

function main() {
  const orderClient = ServiceInjector.getOrderClient();
  orderClient.placeOrder("12345");
}

main();
