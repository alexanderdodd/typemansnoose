import { useState } from "react";
import "./Container.css";
import Count from "./Count";
import Reset from "./Reset";
import Results from "./Results";
import TypedWords from "./TypedWords";
import WordsPerMinute from "./WordsPerMinute";
import WordsToType from "./WordsToType";








function Container() {
  const [wordsToTypeState, setWordsToTypeState] = useState<string>("");
  const [totalTypedWords, setTotalTypedWords] = useState<string[]>([]);
  const [correctlyTypedWords, setCorrectlyTypedWords] = useState<number>(0);
  return (
    <>
      <div>
      <div>
          <WordsToType wordsToType={wordsToTypeState} setSentence={setSentence}/>
        </div>
        <div>
          <TypedWords nextWord={onNextWord}/>
          <Reset onReset={resetState} />
        </div>
        <div>
          <Count />
        </div>
        <div>
          <WordsPerMinute />
        </div>
        <div>
          <Results />
        </div>
      </div>
    </>
  );

  function resetState() {
    setWordsToTypeState("new sentence");
  }

 function setSentence  (sentence: string){
setWordsToTypeState(sentence);
}
  function onNextWord(word: string) {
    console.log(word);
    setTotalTypedWords([...totalTypedWords, word])
    //++ 
    // is word === 'current' word
    // if so, +1 for the correctWords
  }
}

export default Container;
