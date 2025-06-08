import { Leaf } from "./components/leaf";
import { Composite } from "./components/composite";

function main(): void {
  const leaf1 = new Leaf("Leaf 1");
  const leaf2 = new Leaf("Leaf 2");
  const leaf3 = new Leaf("Leaf 3");

  const composite1 = new Composite();
  composite1.add(leaf1);
  composite1.add(leaf2);

  const composite2 = new Composite();
  composite2.add(composite1);
  composite2.add(leaf3);

  console.log("Composite 1:", composite1.operation());
  console.log("Composite 2:", composite2.operation());
}

main();
