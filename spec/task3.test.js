import { describe, test, expect } from '@jest/globals';
import Calculator from "../modules/task3.js";

// Create object to call functions from it
const self = new Calculator

// ADD FUNCTION TEST --->

describe('Task 3 function add();', () => {
test('should return sum of two numbers (a + b)', () => {
  // Arrange
  const a = 5, b = 5; 
  // Act
  const output = self.add(a, b);
  // Assert
  expect(output).toBe(10);
});

test('should throw an error if any of the arguments is not a number', () => {
  // Arrange
  const a = "5", b = 5; 
  // Act
  const output = () => self.add(a, b);
  // Assert
  expect(output).toThrow();
});

test('should return an Infinity if any of the arguments is Infinity', () => {
  // Arrange
  const a = Infinity, b = 5; // or vice versa
  // Act
  const output = self.add(a, b);
  // Assert
  expect(output).toBe(Infinity);
});
});

// SUBTRACT FUNCTION TEST --->

describe('Task 3 function subtract();', () => {
test('should return the difference of two given numbers (a - b)', () => {
  // Arrange
  const a = 5, b = 5; 
  // Act
  const output = self.subtract(a, b);
  // Assert
  expect(output).toBe(0);
});

test('should return an Infinity if the first argument is Infinity', () => {
  // Arrange
  const a = Infinity, b = 5; 
  // Act
  const output = self.subtract(a, b);
  // Assert
  expect(output).toBe(Infinity);
});

test('should return a negative Infinity if the second argument is Infinity', () => {
  // Arrange
  const a = 5, b = Infinity; 
  // Act
  const output = self.subtract(a, b);
  // Assert
  expect(output).toBe(-Infinity);
});

test('should return NaN if both arguments are Infinity', () => {
  // Arrange
  const a = Infinity, b = Infinity; 
  // Act
  const output = self.subtract(a, b);
  // Assert
  expect(output).toBe(NaN);
});
});

// DIVIDE FUNCTION TEST --->

describe('Task 3 function divide();', () => {
  test('should return the division of the two numbers (a / b)', () => {
    // Arrange
    const a = 5, b = 5; 
    // Act
    const output = self.divide(a, b);
    // Assert
    expect(output).toBe(1);
  });
  
  test('should throw an error if any of the arguments is not a number', () => {
    // Arrange
    const a = "5", b = 5; 
    // Act
    const output = () => self.divide(a, b);
    // Assert
    expect(output).toThrow();
  });
  
  test('should return an Infinity if the first argument is Infinity', () => {
    // Arrange
    const a = Infinity, b = 5; 
    // Act
    const output = self.divide(a, b);
    // Assert
    expect(output).toBe(Infinity);
  });

  test('should return a zero if the second argument is Infinity', () => {
    // Arrange
    const a = 5, b = Infinity; 
    // Act
    const output = self.divide(a, b);
    // Assert
    expect(output).toBe(0);
  });

  test('should return a NaN if the both arguments are Infinity', () => {
    // Arrange
    const a = Infinity, b = Infinity; 
    // Act
    const output = self.divide(a, b);
    // Assert
    expect(output).toBe(NaN);
  });
  });

  // MULTIPLY FUNCTION TEST

  describe('Task 3 function multiply();', () => {
    test('should return the multiplication of the two numbers (a * b)', () => {
      // Arrange
      const a = 5, b = 5; 
      // Act
      const output = self.multiply(a, b);
      // Assert
      expect(output).toBe(25);
    });

    test('should return a zero if any arguments is 0', () => {
      // Arrange
      const a = 5, b = 0; 
      // Act
      const output = self.multiply(a, b);
      // Assert
      expect(output).toBe(0);
    });

    test('should return an Infinity if one argument is Infinity and the other is not a zero', () => {
      // Arrange
      const a = Infinity, b = 5; 
      // Act
      const output = self.multiply(a, b);
      // Assert
      expect(output).toBe(Infinity);
    });

    test('should return a NaN if arguments are zero and Infinity', () => {
      // Arrange
      const a = 0, b = Infinity;
      // Act
      const output = self.multiply(a, b);
      // Assert
      expect(output).toBe(NaN);
    })
    });
