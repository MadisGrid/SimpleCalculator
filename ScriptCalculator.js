class Calculator {
  constructor() {
    // Array to hold button label strings
    this.buttonLabels = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

    // Array to hold button objects
    this.buttons = new Array(this.buttonLabels.length);

    // Variables to keep track of computation
    this.result = 0;
    this.previousOperator = ' ';
    this.inputString = '';

    // Text field to display the number and result
    this.display = document.createElement('input');
    this.display.id = 'display';
    this.display.className = 'display';
    this.display.type = 'text';
    this.display.value = '0';
    this.display.readOnly = true;

    // CalculatorButtonsHandler Listener class to handle button clicks
    const CalculatorButtonsHandler = {
      handle: (e) => {
        const buttonLabel = e.target.innerText;
        switch (buttonLabel) {
          case 'C':
            this.result = 0;
            this.inputString = '';
            this.previousOperator = ' ';
            this.display.value = this.inputString;
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
            this.inputString = '';
            break;
          default:
            if (this.inputString === '' || this.inputString === '0') {
              this.inputString = buttonLabel;
            } else {
              this.inputString += buttonLabel;
            }
            this.display.value = this.inputString;
            if (this.previousOperator === '=') {
              this.result = 0;
              this.previousOperator = ' ';
            }
            break;
        }
      }
    };

    this.CalculatorButtonsHandler = CalculatorButtonsHandler;
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
    this.display.value = this.result.toString();
  }

  start() {
    // Create GridPane to place all buttons needed for the Calculator
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
  }
// Add the Calculator object to the window object
window.Calculator = Calculator;

// Create a new instance of the Calculator and start it
const calc = new Calculator();
calc.start();

}
