import "./style.css";
import { parseWord } from "./parser";

const wordsToDisplay =['cheese', 'is', 'a','kind','of','meat'];
const lettersToDisplay = [
    ['c','h','e','e','s','e'],
    ['i', 's']
]




let count = 0;
export function initialize() {
  document.getElementById("textInput").addEventListener("keydown", (event) => {
    let val = parseWord(event.code);

    if (val !== null) {
      document.getElementById("textOutput").innerHTML =
        document.getElementById("textOutput").innerHTML + " " + val;
    }
    if(val === wordsToDisplay[count]) {
      document.getElementById("word-" + count).classList.add("success");
      count++;
     val = null;
    }
    if(val !== wordsToDisplay[count] && val != null){
      document.getElementById("word-"+(count)).classList.add("failure");
      count++;
    }

  });
let htmlWordsToDisplay = "";
let htmlLettersToDisplay = [];

for(let i = 0; i < wordsToDisplay.length; i++){
  htmlWordsToDisplay+=`<span id='word-${i}'>${wordsToDisplay[i]}</span> `;
}

  document.getElementById("wordsDisplay").innerHTML = htmlWordsToDisplay;
}


initialize();
