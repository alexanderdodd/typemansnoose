import "./style.css";
import { Checker } from "./checker";

const wordsToDisplay = "cheese is a kind of meat";
const checker = new Checker(wordsToDisplay);
export function initialize() {
  document.getElementById("textInput").addEventListener("keydown", (event) => {
    const count = checker.getCurrentIndex();
    const result = checker.check(event.key);

    if (result === true) {
      document.getElementById("letter-" + count).classList.add("success");
    } else if (result === false){
      document.getElementById("letter-" + count).classList.add("failure");
    } else if(result === null) {
      // do nothing
    }

  });

  let htmlWordsToDisplay = "";

  for (let i = 0; i < wordsToDisplay.length; i++) {
    htmlWordsToDisplay += `<span id='letter-${i}'>${wordsToDisplay[i]}</span>`;
  }
  document.getElementById("wordsDisplay").innerHTML = htmlWordsToDisplay;
}

initialize();
