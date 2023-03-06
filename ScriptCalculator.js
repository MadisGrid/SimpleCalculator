class Calculator {
  constructor() {
    // Array to hold button label strings
    this.buttonLabels = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

    // Array to hold button objects
    this.buttons = new Array(this.buttonLabels.length);

    // Variables to keep track of computation
    this.result = 0;
    this.previousOperator = ' ';
    this.inputString = '0';

    // Text field to display the number and result
    this.display = new TextField('0');

    // CalculatorButtonsHandler Listener class to handle button clicks
    class CalculatorButtonsHandler {
      handle(e) {
        const buttonLabel = e.target.innerText;
        switch (buttonLabel) {
          case 'C':
            this.result = 0;
            this.inputString = '0';
            this.previousOperator = ' ';
            this.display.setText(this.inputString);
            break;
          case '+':
          case '-':
          case '*':
          case '/':
          case '=':
            this.compute();
            if (buttonLabel === '=') {
              this.previousOperator = ' ';
            } else {
              this.previousOperator = buttonLabel.charAt(0);
            }
            this.inputString = '0';
            break;
          default:
            if (this.inputString === '0') {
              this.inputString = buttonLabel;
            } else {
              this.inputString += buttonLabel;
            }
            this.display.setText(this.inputString);
            if (this.previousOperator === '=') {
              this.result = 0;
              this.previousOperator = ' ';
            }
            break;
        }
      }
    }
    this.CalculatorButtonsHandler = new CalculatorButtonsHandler();
  }

  // Method to handle calculator computations
  compute() {
    const inputNum = parseInt(this.inputString);
    this.inputString = '0';
    switch (this.previousOperator) {
      case '+':
        this.result += inputNum;
        break;
      case '-':
        this.result -= inputNum;
        break;
      case '*':
        this.result *= inputNum;
        break;
      case '/':
        this.result /= inputNum;
        break;
      default:
        this.result = inputNum;
        break;
    }
    this.display.setText(this.result.toString());
  }

  start() {
    // Create GridPane to place all buttons needed for the Calculator
    const display = this.display;
    const grid = document.createElement('div');
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
      grid.appendChild(button);
      this.buttons[i] = button;
    }

    // Use Flex Container to place textField at the top and the Grid of buttons in the center
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style
// Create a function to update the display with the current input
function updateDisplay(displayString) {
  const display = document.getElementById("display");
  display.value = displayString;
}

// Create the calculator UI
function createCalculatorUI() {
  const container = document.createElement("div");
  container.className = "container";

  // Create the display field
  const display = document.createElement("input");
  display.id = "display";
  display.className = "display";
  display.type = "text";
  display.value = "0";
  display.readOnly = true;
  container.appendChild(display);

  // Create the buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  buttonLabels.forEach(label => {
    const button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    button.addEventListener("click", () => handleButtonClick(label));
    buttonContainer.appendChild(button);
  });
  container.appendChild(buttonContainer);

  // Add the calculator UI to the DOM
  document.body.appendChild(container);
}

// Create the calculator UI when the window is loaded
window.addEventListener("load", () => {
  createCalculatorUI();
});
