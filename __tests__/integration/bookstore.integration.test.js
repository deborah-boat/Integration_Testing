import { describe, test, expect } from "vitest";
import { buyBook } from "../../src/bookstore.js";

describe("Bookstore Integration Test", () => {
  test("buyBook should return success true for a valid title", () => {
    const result = buyBook("dune");

    expect(result.success).toBe(true);
  });
});
