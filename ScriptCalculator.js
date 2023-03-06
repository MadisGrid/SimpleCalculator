<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Calculator Demo</title>
    <style>
      #calculator {
        border: 1px solid #ddd;
        width: 200px;
        padding: 10px;
      }
      #calculator input {
        font-size: 1.2em;
        margin-bottom: 10px;
        padding: 5px;
        width: 100%;
      }
      #calculator button {
        font-size: 1.2em;
        padding: 5px 10px;
        margin-right: 5px;
        margin-bottom: 5px;
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: pointer;
      }
      #calculator button:hover {
        background-color: #eee;
      }
    </style>
  </head>
  <body>
    <div id="calculator">
      <input type="text" id="display" value="0" readonly />
      <button onclick="handleButtonClick('C')">C</button>
      <button onclick="handleButtonClick('+')">+</button>
      <button onclick="handleButtonClick('-')">-</button>
      <button onclick="handleButtonClick('*')">*</button>
      <button onclick="handleButtonClick('/')">/</button>
      <button onclick="handleButtonClick('7')">7</button>
      <button onclick="handleButtonClick('8')">8</button>
      <button onclick="handleButtonClick('9')">9</button>
      <button onclick="handleButtonClick('4')">4</button>
      <button onclick="handleButtonClick('5')">5</button>
      <button onclick="handleButtonClick('6')">6</button>
      <button onclick="handleButtonClick('1')">1</button>
      <button onclick="handleButtonClick('2')">2</button>
      <button onclick="handleButtonClick('3')">3</button>
      <button onclick="handleButtonClick('0')">0</button>
      <button onclick="handleButtonClick('.')">.</button>
      <button onclick="handleButtonClick('=')">=</button>
    </div>
    <script>
      let result = 0;
      let previousOperator = "";
      let inputString = "0";
      const display = document.getElementById("display");

      function handleButtonClick(buttonLabel) {
        switch (buttonLabel) {
          case "C":
            result = 0;
            inputString = "0";
            previousOperator = "";
            display.value = inputString;
            break;
          case "+":
          case "-":
          case "*":
          case "/":
          case "=":
            compute();
            if (buttonLabel === "=") {
              previousOperator = "";
            } else {
              previousOperator = buttonLabel;
            }
            inputString = "0";
            break;
          default:
            if (inputString === "0") {
              inputString = buttonLabel;
            } else {
              inputString += buttonLabel;
            }
            display.value = inputString;
            if (previousOperator === "=") {
              result = 0;
              previousOperator = "";
            }
            break;
        }
      }

      function compute() {
  let inputNum = parseInt(inputString);
  inputString = "0";
  switch (previousOperator) {
    case '+':
      result += inputNum;
      break;
    case '-':
      result -= inputNum;
      break;
    case '*':
      result *= inputNum;
      break;
    case '/':
      result /= inputNum;
      break;
    default:
      result = inputNum;
      break;
  }
  display.value = result;
}


let display = document.createElement("input");
display.type = "text";
display.value = "0";
display.readOnly = true;
display.style.width = "100%";

let grid = document.createElement("div");
grid.style.padding = "10px";
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(4, 1fr)";
grid.style.gridGap = "10px";
grid.style.placeItems = "center";

let buttonLabels = ["C", "+", "-", "*", "/", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="];
let buttons = [];

function CalculatorButtonsHandler(event) {
  let buttonLabel = event.target.textContent;
  switch (buttonLabel) {
    case "C":
      result = 0;
      inputString = "0";
      previousOperator = "";
      display.value = inputString;
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
      compute();
      if (buttonLabel === "=") {
