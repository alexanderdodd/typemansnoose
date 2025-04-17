import "./style.css";
import { Checker } from "./checker";
import { SentenceManager } from "./sentenceManager.js";
import { Timer } from "./timer.js";
import { calculateWPM } from "./wpm-calculator.js";


let htmlWordsToDisplay = "";

class Presenter {
    sentenceManager = new SentenceManager();
    timer = new Timer();

    wordsToDisplay = null;
    checker = null
    countdown = null;
    chars = null;

    constructor() {
        this.#initializeState();
        this.#initializeElementInteractions();
    }

    #initializeState() {
        this.timer.cancelTimer();
        this.wordsToDisplay = this.sentenceManager.getNextSentence();
        this.checker = new Checker(this.wordsToDisplay);
        this.countdown = 30;
        this.chars = 0;
        document.getElementById("textInput").value = "";
        document.getElementById("textInput").focus();
        document.getElementById("countdown").innerHTML = this.countdown;
        document.getElementById("accuracy").innerHTML = "";
        let htmlWordsToDisplay = "";
        for (let i = 0; i < this.wordsToDisplay.length; i++) {
            htmlWordsToDisplay += `<span id='letter-${i}'>${this.wordsToDisplay[i]}</span>`;
        }
        document.getElementById("wordsDisplay").innerHTML = htmlWordsToDisplay;
    }

    #initializeElementInteractions() {
        document.getElementById("resetButton").addEventListener("click", () => {
            this.#initializeState();
        });
        document.getElementById("textInput").addEventListener("keydown", (event) => {
            this.chars++;
            if (!this.timer.isStarted()) {
                this.timer.startTimer(this.countdown, (count) => {
                    document.getElementById("countdown").innerHTML = count;
    
                    if (count === 0) {
                        document.getElementById("countdown").innerHTML = "";
                        document.getElementById("wpm").innerHTML = "WPM: " + calculateWPM(this.countdown, this.chars);
    
                       this.#determineKeyStrokeAccuracy();
                    }
                });
            }
            const count = this.checker.getCurrentIndex();
            const result = this.checker.check(event.key);
    
    
            if (result === true && count === this.wordsToDisplay.length - 1) {
                this.#newSentence();    
            } else if (result === true) {
                document.getElementById("letter-" + count).classList.add("success");
            } else if (result === false) {
                document.getElementById("letter-" + count).classList.add("failure");
            } else if (result === null) {
                // do nothing
            }
    
        });
    }

    #newSentence() {
        htmlWordsToDisplay = "";
        this.wordsToDisplay = this.sentenceManager.getNextSentence();
        this.checker.resetChecker(this.wordsToDisplay);
    
        for (let i = 0; i < this.wordsToDisplay.length; i++) {
            htmlWordsToDisplay += `<span id='letter-${i}'>${this.wordsToDisplay[i]}</span>`;
        }
        document.getElementById("wordsDisplay").innerHTML = htmlWordsToDisplay;
        document.getElementById("textInput").value = "";
    
    }

    #determineKeyStrokeAccuracy() {
        let success = 0;
        let failure = 0;
    
        for (let i = 0; i < this.wordsToDisplay.length; i++) {
            let letter = document.getElementById("letter-" + i);
            let style = window.getComputedStyle(letter);
            if (style.color === 'rgb(34, 139, 34)') { //refactor this shit
                success++
            }
            if (style.color === 'rgb(255, 0, 0)') {
                failure++;
            }
        }
        const total = success + failure;
        const probability = (success / (total) * 100).toFixed(2);
        document.getElementById("accuracy").innerHTML="letter total:" + total + " correct:" + success + " failure:" + failure + " percentage:" + probability;
    }

}


new Presenter();


