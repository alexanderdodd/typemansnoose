import { describe, expect, test } from "vitest";
import { Checker } from "./checker";

const phrase = "cheese is";

describe("checker", () => {
  [
    {
      input: "chx",
      results: [true, true, false],
    },
    {
      input: "x",
      results: [false],
    },
    {
      input: "cheese is",
      results: [true, true, true, true, true, true, true, true, true],
    },
    {
      input: "cheese  is",
      results: [true, true, true, true, true, true, true, false, false, false],
    },
    {
      input: "cheese  is",
      results: [true, true, true, true, true, true, true, false, false, false],
    },
    {
      input: "cheese  {Backspace}is",
      results: [true, true, true, true, true, true, true, false, true, true, true],
    },
  ].forEach((testCase) => {
    const checker = new Checker(phrase);

    test("marks " + testCase.input + "correctly", () => {
      splitString(testCase.input).forEach((char, index) => {
        const result = checker.check(char);
        expect(result, 'check at index ' + index + " with char " + char).toBe(testCase.results[index]);
      });
    });
  });
});


function splitString(inputString) {
  // This regex matches either:
  // 1. A sequence of characters within {} (like {Backspace})
  // 2. A single character (outside of {})
  const regex = /{[^}]*}|./g;

  // Use the regex to match all sequences and split them
  return inputString.match(regex).map(part => {
    // If the part is inside {}, we just return the content inside the braces
    if (part.startsWith("{") && part.endsWith("}")) {
      return part.slice(1, -1); // Remove the braces
    }
    return part; // Otherwise, return the character as it is
  });
}