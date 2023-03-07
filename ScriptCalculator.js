class Calculator {
  constructor() {
    this.result = 0;
    this.currentOperator = null;
    this.currentInput = null;

    this.display = document.getElementById("display");

    this.buttons = document.querySelectorAll(".button-grid input[type='button']");
    this.buttons.forEach(button => {
      const label = button.value;
      button.addEventListener("click", () => this.handleButtonClick(label));
    });
  }

  handleButtonClick(label) {
    switch (label) {
      case "C":
        this.clear();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        this.handleOperator(label);
        break;
      case "=":
        this.compute();
        break;
      default:
        this.handleDigit(label);
        break;
    }
  }

  clear() {
    this.result = 0;
    this.currentOperator = null;
    this.currentInput = null;
    this.display.value = "0";
  }

  handleOperator(operator) {
    if (this.currentInput !== null) {
      this.compute();
    }
    this.currentOperator = operator;
    this.currentInput = null;
  }

  handleDigit(digit) {
    if (this.currentInput === null) {
      this.currentInput = digit;
    } else {
      this.currentInput += digit;
    }
    this.display.value = this.currentInput;
  }

  compute() {
    const inputNum = parseFloat(this.currentInput);
    switch (this.currentOperator) {
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
    this.currentOperator = null;
    this.currentInput = null;
  }
}

new Calculator();
