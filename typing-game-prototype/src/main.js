import "./style.css";
import { parseWord } from "./parser";
export function initialize() {
  document.getElementById("textInput").addEventListener("keydown", (event) => {
    const val = parseWord(event.code);

    if (val !== null) {
      document.getElementById("textOutput").innerHTML =
        document.getElementById("textOutput").innerHTML + " " + val;
    }
  });

  document.getElementById("wordsDisplay").innerHTML = "cheese";
}

initialize();
