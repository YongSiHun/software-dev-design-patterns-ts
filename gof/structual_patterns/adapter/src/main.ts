import { USSocket } from "./devices/us_socket";
import { EUPlug } from "./devices/eu_plug";
import { PowerAdapter } from "./adapters/power_adapter";

function main(): void {
  const usSocket = new USSocket();
  const euPlug = new EUPlug();
  const adapter = new PowerAdapter(usSocket);

  const result = adapter.adaptEUPlug(euPlug);
  console.log(result);
}

main();
