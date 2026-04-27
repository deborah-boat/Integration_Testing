import { describe, test, expect, vi } from "vitest";
import { orderDrink } from "../../src/coffeeshop.js";

describe("Coffee Shop Integration Test", () => {
  test("should successfully complete a full drink order", () => {
    const randomSpy = vi.spyOn(Math, "random").mockReturnValue(0.5);

    const result = orderDrink("latte");

    expect(result).toBe(true);
    randomSpy.mockRestore();
  });
});
