import { ConcreteCarBuilder } from "./builders/concrete_car_builder";
import { Director } from "./director";

const builder = new ConcreteCarBuilder();
const director = new Director();

director.setBuilder(builder);

director.constructSportsCar();
const sportsCar = builder.getResult();
console.log("Sports Car:", sportsCar.specification());

director.constructSUV();
const suv = builder.getResult();
console.log("SUV:", suv.specification());
