import "./style.css";
import {Checker} from "./checker";
import {SentenceManager} from "./sentenceManager.js";


let htmlWordsToDisplay = "";

const sentenceManager = new SentenceManager();
let wordsToDisplay = sentenceManager.getNextSentence();

let checker = new Checker(wordsToDisplay);


const newSentence = function () {

    htmlWordsToDisplay = "";
    wordsToDisplay = sentenceManager.getNextSentence();
    checker.resetChecker(wordsToDisplay);

    for (let i = 0; i < wordsToDisplay.length; i++) {
        htmlWordsToDisplay += `<span id='letter-${i}'>${wordsToDisplay[i]}</span>`;
    }
    document.getElementById("wordsDisplay").innerHTML = htmlWordsToDisplay;
    document.getElementById("textInput").value = "";

}


export function initialize() {

    document.getElementById("textInput").addEventListener("keydown", (event) => {
        const count = checker.getCurrentIndex();
        const result = checker.check(event.key);

        if (result === true && count === wordsToDisplay.length - 1) {
            newSentence();
        } else if (result === true) {
            document.getElementById("letter-" + count).classList.add("success");
        } else if (result === false) {
            document.getElementById("letter-" + count).classList.add("failure");
        } else if (result === null) {
            // do nothing
        }

    });

    for (let i = 0; i < wordsToDisplay.length; i++) {
        htmlWordsToDisplay += `<span id='letter-${i}'>${wordsToDisplay[i]}</span>`;
    }
    document.getElementById("wordsDisplay").innerHTML = htmlWordsToDisplay;
}

initialize();


