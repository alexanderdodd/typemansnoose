import "./style.css";

export function initialize() {
  document.getElementById("textInput").addEventListener("keyup", (val) => {
    document.getElementById("textOutput").innerHTML =
      document.getElementById("textOutput").innerHTML + val.key;
  });

  document.getElementById("wordsDisplay").innerHTML = "cheese";
}

initialize();
