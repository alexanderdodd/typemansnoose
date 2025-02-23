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
        return null;
      }
      const result = char === this.#sentenceToCheck.at(this.#currentIndex);
      this.#currentIndex++;

      console.log("index " + this.#currentIndex);
      return result;
    }

    getCurrentIndex() {
      return this.#currentIndex;
    }
    resetChecker(sentenceToCheck){
      console.log("sentence " + this.#sentenceToCheck);
      this.#sentenceToCheck = sentenceToCheck;
      console.log("sentence " + this.#sentenceToCheck);
      this.#currentIndex=0;
    }

}
