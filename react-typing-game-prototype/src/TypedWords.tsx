export default function TypedWords({
  nextWord,
  nextChar,
  disabled,
  inputWords,
  setInputWords,
}: {
  nextWord: (nextWord: string) => void;
  nextChar: (nextChar: string) => void;
  disabled: boolean;
  inputWords: string;
  setInputWords: (words: string) => void;
}) {
  return (
    <>
      <input
        disabled={disabled}
        value={inputWords}
        onChange={(event) => {
          setInputWords(event.target.value);
        }}
        onKeyDown={(key) =>
          parseWord(key.code as unknown as keyof typeof keyToCodeLookup)
        }
      ></input>
    </>
  );

  function parseWord(code: keyof typeof keyToCodeLookup) {
    if (!streamOpen) {
      streamOpen = true;
      word = "";
    }

    if (isEndOfWord(code)) {
      setTimeout(() => {
        setInputWords("");
      });
      streamOpen = false;
      nextWord(word);
    }

    if (KeyCodesToParse.includes(code)) {
      word += keyToCodeLookup[code];
      nextChar(keyToCodeLookup[code]);
    }
  }
}

function isEndOfWord(code: keyof typeof keyToCodeLookup) {
  return DelimiterCodes.includes(code);
}

const KeyCodesToParse = [
  "KeyA",
  "KeyB",
  "KeyC",
  "KeyD",
  "KeyE",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyI",
  "KeyJ",
  "KeyK",
  "KeyL",
  "KeyM",
  "KeyN",
  "KeyO",
  "KeyP",
  "KeyQ",
  "KeyR",
  "KeyS",
  "KeyT",
  "KeyU",
  "KeyV",
  "KeyW",
  "KeyX",
  "KeyY",
  "KeyZ",
];

const keyToCodeLookup = {
  KeyA: "a",
  KeyB: "b",
  KeyC: "c",
  KeyD: "d",
  KeyE: "e",
  KeyF: "f",
  KeyG: "g",
  KeyH: "h",
  KeyI: "i",
  KeyJ: "j",
  KeyK: "k",
  KeyL: "l",
  KeyM: "m",
  KeyN: "n",
  KeyO: "o",
  KeyP: "p",
  KeyQ: "q",
  KeyR: "r",
  KeyS: "s",
  KeyT: "t",
  KeyU: "u",
  KeyV: "v",
  KeyW: "w",
  KeyX: "x",
  KeyY: "y",
  KeyZ: "z",
  Space: " ",
};

const DelimiterCodes = ["Space"];

let streamOpen = false;
let word = "";
