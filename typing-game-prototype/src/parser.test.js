import { parseWord } from "./parser";
import { expect, test } from "vitest";

test("parses word", () => {
  ["c", "h", "e", "e", "s", "e", " "].forEach((key, index) => {
    if (index < 6) {
      expect(parseWord(key)).toBe(null);
    } else {
      expect(parseWord(key)).toBe("cheese");
    }
  });
});
