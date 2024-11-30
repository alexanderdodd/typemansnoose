import "./style.css";

document.getElementById("textInput").addEventListener("keyup", (val) => {
  document.getElementById("textOutput").innerHTML =
    document.getElementById("textOutput").innerHTML + val.key;
});
