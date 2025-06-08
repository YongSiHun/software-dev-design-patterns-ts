import { ServiceProxy } from "./proxies/service_proxy";

function main(): void {
  const proxy = new ServiceProxy();

  console.log("\nFirst request:");
  console.log(proxy.fetchData());

  console.log("\nSecond request:");
  console.log(proxy.fetchData());
}

main();
