export default class Calculator {

  static #validate(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Only numbers are accepted as input');
  }
    return true;
  }
  
  add(a, b) {
    if(Calculator.#validate(a, b))
    return a + b;
  }

  subtract(a, b) {
    if(Calculator.#validate(a, b))
    return a - b;
  }

  divide(a, b) {
    if(Calculator.#validate(a, b))
    return a / b;
  }

  multiply(a, b) {
    if(Calculator.#validate(a, b))
    return a * b;
  }
}
