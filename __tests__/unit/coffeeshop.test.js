import { describe, test, expect } from "vitest";
import { createDrink, prepareOrder } from "../../src/coffeeshop.js";

describe("Coffee Shop Unit Tests", () => {
  test("createDrink returns correct type and price", () => {
    const drink = createDrink("latte");

    expect(drink).toEqual({ type: "latte", price: 45 });
  });

  test("createDrink returns undefined price for unknown type", () => {
    const drink = createDrink("mocha");

    expect(drink).toEqual({ type: "mocha", price: undefined });
  });

  test("prepareOrder returns a numeric ticket number", () => {
    const ticketNumber = prepareOrder({ type: "espresso", price: 30 });

    expect(typeof ticketNumber).toBe("number");
    expect(Number.isInteger(ticketNumber)).toBe(true);
    expect(ticketNumber).toBeGreaterThanOrEqual(0);
    expect(ticketNumber).toBeLessThan(1000);
  });
});
