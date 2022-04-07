import { expect, test, describe } from '@jest/globals';
import TaskTwo from "../modules/task2.js";

// Create object to call functions from it
const self = new TaskTwo();

describe('Task 2 function reverseString();', () => {
test('should return reversed String argument', () => {
  // Arrange
  const input = "Said";
  // Act 
  const output = self.reverseString(input);
  // Assert
  expect(output).toBe("diaS");
});
});
