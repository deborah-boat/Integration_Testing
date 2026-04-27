import { describe, test, expect } from "vitest";
import { findBook, reserveStock, confirmPurchase } from "../../src/bookstore.js";

describe("Bookstore Unit Tests", () => {
  test("findBook returns correct title and price for a valid title", () => {
    const book = findBook("dune");

    expect(book).toEqual({ title: "dune", price: 89 });
  });

  test("findBook returns undefined price for a title not in catalogue", () => {
    const book = findBook("snowcrash");

    expect(book).toEqual({ title: "snowcrash", price: undefined });
  });

  test("reserveStock returns a 4-digit numeric reservation code", () => {
    const code = reserveStock({ title: "foundation", price: 75 });

    expect(typeof code).toBe("number");
    expect(Number.isInteger(code)).toBe(true);
    expect(code).toBeGreaterThanOrEqual(1000);
    expect(code).toBeLessThanOrEqual(9999);
  });

  test("confirmPurchase throws when reservation code is falsy", () => {
    expect(() => confirmPurchase(undefined, 89)).toThrow("Invalid reservation");
  });
});
