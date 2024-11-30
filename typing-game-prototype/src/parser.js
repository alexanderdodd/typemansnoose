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

let streamOpen = false;
let word = "";

export function parseWord(key) {
  if (!streamOpen) {
    streamOpen = true;
  }

  if (Delimiters.includes(key)) {
    streamOpen = false;
    return word;
  }

  if (LettersToParse.includes(key)) {
    word += key;
  }

  return null;
}
