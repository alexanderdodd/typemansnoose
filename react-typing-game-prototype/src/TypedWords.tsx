import { useState } from "react";

export default function TypedWords({
  nextWord,
}: {
  nextWord: (nextWord: string) => void;
}) {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
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

    if (DelimiterCodes.includes(code)) {
      streamOpen = false;
      setValue("");
      nextWord(word);
    }

    if (KeyCodesToParse.includes(code)) {
      word += keyToCodeLookup[code];
    }
  }
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