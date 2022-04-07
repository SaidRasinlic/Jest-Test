import { describe, test, expect } from '@jest/globals';
import TaskFour from "../modules/task4.js";

// Create object to call functions from it
const self = new TaskFour();

describe('Task 4 function capitalize();', () => {
  test('should return a String with first character capitalized', () => {
    // Arrange
    const input = "today is a nice day.";
    // Act
    const output = self.capitalize(input);
    // Assert
    expect(output).toBe("Today is a nice day.");
});

test('should throw an error if argument is not a String', () => {
  // Arrange
  const input = 123;
  // Act
  const output = () => self.capitalize(input);
  // Assert
  expect(output).toThrow();
});
});