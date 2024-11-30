import "./style.css";

const LettersToParse = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Delimiters = [" "];

document.getElementById("textInput").addEventListener("keyup", (val) => {
  document.getElementById("textOutput").innerHTML =
    document.getElementById("textOutput").innerHTML + val.key;
});

document.getElementById("wordsDisplay").innerHTML = "cheese"
