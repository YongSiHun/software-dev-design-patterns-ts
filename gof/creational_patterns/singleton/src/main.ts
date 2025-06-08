import { Singleton } from "./singletons/singleton";

function main(): void {
  const singleton1 = Singleton.getInstance("FirstInstance");
  singleton1.sayHello();

  const singleton2 = Singleton.getInstance("SecondInstance");
  singleton2.sayHello();

  console.log("Are both instances the same?", singleton1 === singleton2);
}

main();
