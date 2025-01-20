class Calculator {
  constructor() {
    this.num1 = parseFloat(document.querySelector('#num1').value);
    this.num2 = parseFloat(document.querySelector('#num2').value);
    this.operation = document.querySelector('#operation').value;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }

  calculate() {
    switch (this.operation) {
      case 'add':
        return this.add();
      case 'subtract':
        return this.subtract();
      case 'multiply':
        return this.multiply();
      case 'divide':
        return this.divide();
      default:
        break;
    }
  }
}

document.querySelector('#calculateBtn').addEventListener('click', () => {
  const result = new Calculator(num1, num2, operation).calculate();
  document.querySelector('#result').innerHTML = result;
})