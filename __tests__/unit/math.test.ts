// math.test.ts
import { describe, it, expect } from "vitest";
import { add } from "../../src/math.ts";

describe("add", () => {
  it("sums two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
