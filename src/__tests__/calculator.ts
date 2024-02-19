import { Calculator } from "../calculator";


describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("calculates the total price without discounts", () => {
    const itemsOrdered = ["Red set", "Green set"];
    const totalPrice = calculator.calculatePrice(itemsOrdered, false);
    expect(totalPrice).toBe(90);
  });

  it("applies 10% discount for customers with member card", () => {
    const itemsOrdered = ["Red set", "Green set"];
    const totalPrice = calculator.calculatePrice(itemsOrdered, true);
    expect(totalPrice).toBe(81);
  });

  it("applies 5% discount for each pair of Orange, Pink, or Green sets", () => {
    const itemsOrdered = ["Orange set", "Orange set", "Pink set", "Pink set", "Green set", "Green set"];
    const totalPrice = calculator.calculatePrice(itemsOrdered, false);
    // Orange sets: 120*2 - (120*0.05 + 120*0.05) = 228
    // Pink sets: 80*2 - (80*0.05 + 80*0.05) = 152
    // Green sets: 40*2 - (40*0.05 + 40*0.05) = 76
    // Total: 228 + 152 + 76 = 456
    expect(totalPrice).toBe(456);
  });
});
