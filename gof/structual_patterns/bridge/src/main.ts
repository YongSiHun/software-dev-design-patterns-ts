import { TV } from "./devices/tv";
import { Radio } from "./devices/radio";
import { Remote } from "./remotes/remote";
import { AdvancedRemote } from "./remotes/advanced_remote";

function main(): void {
  const tv = new TV();
  const radio = new Radio();

  const tvRemote = new Remote(tv);
  const radioRemote = new AdvancedRemote(radio);

  console.log("\n=== TV Remote ===");
  tvRemote.togglePower();
  tvRemote.volumeUp();
  tvRemote.togglePower();

  console.log("\n=== Radio Remote ===");
  radioRemote.togglePower();
  radioRemote.volumeDown();
  radioRemote.mute();
}

main();
