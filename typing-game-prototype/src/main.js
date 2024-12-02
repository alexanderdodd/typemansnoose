import "./style.css";
import { parseWord } from "./parser";

const wordsToDisplay = ["cheese", "is"];

export function initialize() {
  document.getElementById("textInput").addEventListener("keydown", (event) => {
    const val = parseWord(event.code);

    if (val !== null) {
      document.getElementById("textOutput").innerHTML =
        document.getElementById("textOutput").innerHTML + " " + val;
      if (val === wordsToDisplay[0]) {
        document.getElementById(`word-${0}`).classList.add("success");
      }
      clearInput();
    }
  });
  let htmlWordsToDisplay = "";

  for (let i = 0; i < wordsToDisplay.length; i++) {
    htmlWordsToDisplay += `<span id='word-${i}'>${wordsToDisplay[i]}</span> `;
  }

  document.getElementById("wordsDisplay").innerHTML = htmlWordsToDisplay;
}

function clearInput() {
  document.getElementById("textInput").value = "";
}

initialize();
