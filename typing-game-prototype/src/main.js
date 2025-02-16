import "./style.css";
import { Checker } from "./checker";

const wordsToDisplay = "cheese is a kind of meat";
const checker = new Checker(wordsToDisplay);
let count = 0;
export function initialize() {
  document.getElementById("textInput").addEventListener("keydown", (event) => {
    console.log("event", event);
    const result = checker.check(event.key);

    if (result === true) {
      document.getElementById("letter-" + count).classList.add("success");
    } else {
      document.getElementById("letter-" + count).classList.add("failure");
    }

    count++;
  });

  let htmlWordsToDisplay = "";

  for (let i = 0; i < wordsToDisplay.length; i++) {
    htmlWordsToDisplay += `<span id='letter-${i}'>${wordsToDisplay[i]}</span>`;
  }
  document.getElementById("wordsDisplay").innerHTML = htmlWordsToDisplay;
}

initialize();
