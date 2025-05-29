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
  const [wordsToTypeState, setWordsToTypeState] = useState<string>("");
  const [totalTypedWords, setTotalTypedWords] = useState<string[]>([]);
  // const [correctlyTypedWords, setCorrectlyTypedWords] = useState<number>(0);
  const [currentCount, setCurrentCount] = useState<number>(countdownLength);
  const [startCountdown, setStartCountdown] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  return (
    <>
      <div>
        <div>
          <WordsToType
            wordsToType={wordsToTypeState}
            setSentence={setSentence}
          />
        </div>
        <div>
          <TypedWords
            nextWord={onNextWord}
            nextChar={onNextChar}
            disabled={showResults}
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
    setWordsToTypeState("new sentence");
    setTotalTypedWords([]);
    setCurrentCount(countdownLength);
    setShowResults(false);
    // startCountdown = false;
  }

  function setSentence(sentence: string) {
    console.log("set sentence", sentence);
    setWordsToTypeState(sentence);
  }

  function onNextWord(word: string) {
    console.log(word);
    setTotalTypedWords([...totalTypedWords, word]);
    //++
    // is word === 'current' word
    // if so, +1 for the correctWords
  }

  function onNextChar(char: string) {
    console.log(char);
    setStartCountdown(true);
  }

  function onCountdownFinish() {
    console.log("countdown finished", showResults);
    setShowResults(true);
  }
}

export default Container;
