import { parseWord } from "./parser";
import { expect, test } from "vitest";

test("parses word", () => {
  ["KeyC", "KeyH", "KeyE", "KeyE", "KeyS", "KeyE", "Space"].forEach(
    (key, index) => {
      if (index < 6) {
        expect(parseWord(key)).toBe(null);
      } else {
        expect(parseWord(key)).toBe("cheese");
      }
    }
  );
});

test("parses multiple words", () => {
  let words = [];
  [
    "KeyC",
    "KeyH",
    "KeyE",
    "KeyE",
    "KeyS",
    "KeyE",
    "Space",
    "KeyI",
    "KeyS",
    "Space",
    "KeyA",
    "Space",
  ].forEach((key) => {
    const result = parseWord(key);
    if (result !== null) {
      words.push(result);
    }
  });
  expect(words).toEqual(["cheese", "is", "a"]);
});
