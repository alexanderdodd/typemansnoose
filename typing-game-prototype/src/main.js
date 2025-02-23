import "./style.css";
import {Checker} from "./checker";



const wordsDisplay1 = "cheese is a kind of meat ";
const wordsDisplay2 = "wisdom sets boundaries to knowledge ";
const wordDisplay3 = "cheese bounds knowledge to wisdom ";
const wordsDisplayList = [];

wordsDisplayList.push(wordsDisplay1, wordsDisplay2, wordDisplay3);
let sentenceCount= 0;
let wordsToDisplay =  wordsDisplayList[sentenceCount];
let checker = new Checker(wordsToDisplay);


export function initialize() {

    document.getElementById("textInput").addEventListener("keydown", (event) => {
        const count = checker.getCurrentIndex();
        const result = checker.check(event.key);

        if (result === true && count === wordsToDisplay.length - 1) {
            sentenceCount +=1;
            wordsToDisplay=wordsDisplayList[sentenceCount];
            checker = new Checker(wordsToDisplay);
            console.log("htmlWords "+ htmlWordsToDisplay);
            htmlWordsToDisplay = "";
            for (let i = 0; i < wordsToDisplay.length; i++) {
                htmlWordsToDisplay += `<span id='letter-${i}'>${wordsToDisplay[i]}</span>`;
                console.log("htmlWords in loop "+ htmlWordsToDisplay);
            }
            document.getElementById("wordsDisplay").innerHTML = htmlWordsToDisplay;
        }

        if (result === true) {
            document.getElementById("letter-" + count).classList.add("success");
        } else if (result === false) {
            document.getElementById("letter-" + count).classList.add("failure");
        } else if (result === null) {
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


