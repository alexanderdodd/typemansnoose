import { useState } from "react";
import "./Container.css";
import Count from "./Count";
import Reset from "./Reset";
import Results from "./Results";
import TypedWords from "./TypedWords";
import WordsPerMinute from "./WordsPerMinute";
import WordsToType from "./WordsToType";

const countdownLength = 15;

function Container() {
  const [inputValue, setInputValue] = useState<string>("");
  const [wordsToType, setWordsToType] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
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
  }

  function setSentence(sentence: string) {
    setWordsToType(sentence.split(" "));
  }

  function onNextWord(word: string) {
    setTotalTypedWords([...totalTypedWords, word]);
    setCurrentWordIndex(currentWordIndex + 1);

    if (currentWordIndex === wordsToType.length - 2) {
      setCreateNewSentence(true);
      setCurrentWordIndex(0);
    }
  }

  function onNextChar() {
    setStartCountdown(true);
  }

  function onCountdownFinish() {
    setShowResults(true);
  }
}

export default Container;
