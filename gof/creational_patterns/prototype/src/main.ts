import { ConcretePrototype } from "./prototypes/concrete_prototype";

function main(): void {
  const original = new ConcretePrototype("Prototype1", {
    color: "blue",
    size: "large",
  });

  console.log("Original:", original);

  const cloned = original.clone();
  cloned.attributes.color = "red"; // 복제본 수정

  console.log("Cloned:", cloned);
  console.log("Original after cloning:", original);
}

main();
