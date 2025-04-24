import "./Container.css";
import Count from "./Count";
import Reset from "./Reset";
import Results from "./Results";
import TypedWords from "./TypedWords";
import WordsPerMinute from "./WordsPerMinute";
import WordsToType from "./WordsToType";

function Container() {
  return (
    <>
      <div>
        <div>
          <WordsToType />
        </div>
        <div>
          <TypedWords />
          <Reset />
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
}

export default Container;
