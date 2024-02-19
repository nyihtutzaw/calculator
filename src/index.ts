import { Calculator } from "./calculator";

const calculator = new Calculator();
const itemsOrdered = ["Orange set", "Orange set", "Pink set", "Pink set", "Green set", "Green set"];
const hasMemberCard = false;
const totalPrice = calculator.calculatePrice(itemsOrdered, hasMemberCard);
console.log("Total Price:", totalPrice);