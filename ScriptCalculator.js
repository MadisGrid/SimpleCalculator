class Calculator {
  constructor() {
    // Array to hold button label strings
    this.buttonLabels = [
      "7",
      "8",
      "9",
      "/",
      "4",
      "5",
      "6",
      "*",
      "1",
      "2",
      "3",
      "-",
      "0",
      ".",
      "=",
      "+",
      "C",
    ];
    // Array to hold button objects
    this.buttons = new Array(this.buttonLabels.length);

    // Variables to keep track of computation
    this.result = 0;
    this.previousOperator = " ";
    this.inputString = "";

    // Text field to display the number and result
    this.display = document.createElement("input");
    this.display.id = "display";
    this.display.className = "display";
    this.display.type = "text";
    this.display.value = "0";
    this.display.readOnly = true;

    // CalculatorButtonsHandler Listener class to handle button clicks
    const CalculatorButtonsHandler = {
      handle: (e) => {
        const buttonLabel = e.target.innerText;
        switch (buttonLabel) {
          case "C":
            this.result = 0;
            this.inputString = "";
            this.previousOperator = " ";
            this.display.value = "0";
            break;
          case "+":
          case "-":
          case "*":
          case "/":
            if (this.inputString !== "") {
              this.compute();
            }
            this.previousOperator = buttonLabel.charAt(0);
            break;
          case "=":
            if (this.inputString !== "") {
              this.compute();
              this.previousOperator = " ";
            }
            break;
          default:
            if (this.inputString === "0") {
              this.inputString = buttonLabel;
            } else {
              this.inputString += buttonLabel;
            }
            this.display.value = this.inputString;
            break;
        }
      },
    };

    this.CalculatorButtonsHandler = CalculatorButtonsHandler;
  }

  // Method to handle calculator computations
  compute() {
    const inputNum = parseInt(this.inputString);
    this.inputString = "";
    switch (this.previousOperator) {
      case "+":
        this.result += inputNum;
        break;
      case "-":
        this.result -= inputNum;
        break;
      case "*":
        this.result *= inputNum;
        break;
      case "/":
        this.result /= inputNum;
        break;
      default:
        this.result = inputNum;
        break;
    }
    this.display.value = this.result.toString();
  }

  start() {
    // Create GridPane to place all buttons needed for the Calculator
    const grid = document.createElement("div");
    grid.style.padding = "10px";
    grid.style.display = "grid";
    grid.style.gridGap = "10px";
    grid.style.gridTemplateColumns = "repeat(4, 50px)";
    grid.style.gridTemplateRows = "repeat(4, 50px)";
    grid.style.alignItems = "center";
    grid.style.justifyContent = "center";

    // Create buttons and add them to the grid
    for (let i = 0; i < this.buttonLabels.length; i++) {
      const button = document.createElement("button");
      button.innerText = this.buttonLabels[i];
      button.onclick
start() {
    // Create GridPane to place all buttons needed for the Calculator
    const grid = document.createElement('div');
    grid.id = 'grid';
    grid.style.padding = '10px';
    grid.style.display = 'grid';
    grid.style.gridGap = '10px';
    grid.style.gridTemplateColumns = 'repeat(4, 50px)';
    grid.style.gridTemplateRows = 'repeat(4, 50px)';
    grid.style.alignItems = 'center';
    grid.style.justifyContent = 'center';

    // Create buttons and add them to the grid
    for (let i = 0; i < this.buttonLabels.length; i++) {
      const button = document.createElement('button');
      button.innerText = this.buttonLabels[i];
      button.onclick = (e) => this.CalculatorButtonsHandler.handle(e);
      button.style.width = '50px';
      button.style.height = '50px';
      button.style.borderRadius = '50%';
      button.style.backgroundColor = 'lightgray';
      button.style.border = 'none'; // Added line
      button.style.fontSize = '20px';
      button.style.fontWeight = 'bold';
      grid.appendChild(button);
      this.buttons[i] = button;
    }

    // Add the grid element to the document
    document.body.appendChild(grid);
    document.body.appendChild(this.display);
  }
