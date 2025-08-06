import words from "./randomWords.json";
import "./WordsToType.css";
let wordsDisplayList = [];
let wordsPerSentence = 10;

export default function WordsToType({
  wordsToType,
  setSentence,
  currentWordIndex,
  createNewSentence,
  setCreateNewSentence,
}) {
  {
    if (createNewSentence) {
      setSentence(createSentence());
    }
    setCreateNewSentence(false);
  }

  return (
    <>
      {wordsToType.split(" ").map((word, idx) => (
        <span
          key={idx}
          className={idx === currentWordIndex ? "currentWord" : ""}
        >
          {word}
          {idx < wordsToType.split(" ").length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

function createSentence() {
  const keys = Object.keys(words);
  const lgth: number = keys.length;
  const randomWordCollection: string = keys[generateRandomNumber(lgth)];
  let wordString = words[randomWordCollection];
  wordString = wordString.replace("-", " ");
  const splitBySpace = wordString.split(" ");
  const sanitisedWords = getWordsAsSanitisedWordArray(splitBySpace);
  return generateSentencesWithRandomWords(sanitisedWords);
}

function generateRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

function getWordsAsSanitisedWordArray(splitBySpace: string[]) {
  const sanitisedWords = [];
  for (let i = 0; i < splitBySpace.length; i++) {
    let sanitisedWord = splitBySpace[i].replace(
      /[.,\/#!@?$£%^&*1234567890;\[\]:{}=\-_`~()]/g,
      ""
    );
    if (/^[a-zA-Z ]+$/.test(sanitisedWord)) {
      sanitisedWords.push(sanitisedWord.toLowerCase() + " "); //add space
    }
  }
  return sanitisedWords;
}

function generateSentencesWithRandomWords(wordArray: string[]) {
  for (let i = 0; i < 1; i++) {
    //1 change this
    let sentence = "";
    let wordToCheck = undefined;
    let wordToAdd = undefined;

    for (let i = 0; i < wordsPerSentence; i++) {
      wordToAdd = wordArray[generateRandomNumber(wordArray.length)];

      while (wordToCheck === wordToAdd) {
        // ensure that contiguous words are different
        wordToAdd = wordArray[generateRandomNumber(wordArray.length)];
      }
      wordToCheck = wordToAdd;
      sentence += wordToAdd;
    }
    wordsDisplayList.push(sentence);
    return sentence;
  }
}
