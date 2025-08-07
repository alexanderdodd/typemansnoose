import { useState } from "react";
import "./Container.css";
import Count from "./Count";
import Reset from "./Reset";
import Results from "./Results";
import TypedWords from "./TypedWords";
import WordsPerMinute from "./WordsPerMinute";
import WordsToType from "./WordsToType";

const countdownLength = 15;
const incorrectCharIndexes = [];

function Container() {
  const [inputValue, setInputValue] = useState<string>("");
  const [wordsToType, setWordsToType] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [totalTypedWords, setTotalTypedWords] = useState<string[]>([]);
  const [currentCount, setCurrentCount] = useState<number>(countdownLength);
  const [startCountdown, setStartCountdown] = useState<boolean>(false);
  const [createNewSentence, setCreateNewSentence] = useState<boolean>(true);
  const [showResults, setShowResults] = useState<boolean>(false);

  return (
    <>
      <div>
        <div>
          <WordsToType
            wordsToType={wordsToType.join(" ")}
            setSentence={setSentence}
            currentWordIndex={currentWordIndex}
            incorrectCharIndexes={incorrectCharIndexes}
            createNewSentence={createNewSentence}
            setCreateNewSentence={setCreateNewSentence}
          />
        </div>
        <div>
          <TypedWords
            nextWord={onNextWord}
            nextChar={onNextChar}
            disabled={showResults}
            inputWords={inputValue}
            setInputWords={setInputValue}
          />
          <Reset onReset={resetState} />
        </div>
        <div>
          <Count
            onCountdownFinish={onCountdownFinish}
            currentCount={currentCount}
            setCurrentCount={setCurrentCount}
            startCountdown={startCountdown}
            setStartCountdown={setStartCountdown}
          />
        </div>
        {showResults ? (
          <>
            <div>
              <WordsPerMinute
                wordCount={totalTypedWords.length}
                countdownLength={countdownLength}
              />
            </div>
            <div>
              <Results />
            </div>
          </>
        ) : (
          <> </>
        )}
      </div>
    </>
  );

  function resetState() {
    setCreateNewSentence(true);
    setTotalTypedWords([]);
    setCurrentWordIndex(0);
    setCurrentCount(countdownLength);
    setStartCountdown(false);
    setShowResults(false);
    setInputValue("");
    setCurrentCharIndex(0);
    incorrectCharIndexes.length = 0;
  }

  function setSentence(sentence: string) {
    setWordsToType(sentence.split(" "));
    setCurrentCharIndex(0);
    incorrectCharIndexes.length = 0;
  }

  function onNextWord(word: string) {
    if (word === wordsToType[currentWordIndex]) {
      setTotalTypedWords([...totalTypedWords, word]);
      setCurrentWordIndex(currentWordIndex + 1);

      if (currentWordIndex === wordsToType.length - 2) {
        setCreateNewSentence(true);
        setCurrentWordIndex(0);
      }
    }
  }

  function onNextChar(char: string) {
    if (char !== wordsToType[currentWordIndex][currentCharIndex]) {
      incorrectCharIndexes.push(currentCharIndex);
    }
    setStartCountdown(true);
    setCurrentCharIndex(currentCharIndex + 1);
  }

  function onCountdownFinish() {
    setShowResults(true);
  }
}

export default Container;
