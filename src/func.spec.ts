import { describe, expect, test } from '@jest/globals';
import { getName } from "./func.js";

describe("MySuite", () => {
  test("test 1", () => {
    const r = getName()
    expect(r).toEqual("Paul")
  })
})