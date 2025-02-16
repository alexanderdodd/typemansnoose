export const BACKSPACE_KEY = "Backspace";

export class Checker {
  #sentenceToCheck = "";
  #currentIndex = 0;
  constructor(sentenceToCheck) {
    this.#sentenceToCheck = sentenceToCheck;
  }

  check(char) {
    if (char === BACKSPACE_KEY) {
      this.#currentIndex--;
      return true;
    }
    const result = char === this.#sentenceToCheck.at(this.#currentIndex);
    this.#currentIndex++;
    return result;
  }
}
