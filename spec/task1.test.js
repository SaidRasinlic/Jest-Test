import { expect, test, describe } from '@jest/globals';
import TaskOne from '../modules/task1.js';

// Create object to call functions from it
const self = new TaskOne();

describe('Task 1 function strLength();', () => {
test('should return correct length of a String', () => {
  // Arrange
  const input = "Microverse";
  // Act
  const output = self.stringLength(input);
  // Assert
  expect(output).toBe(10);
});

test('should throw an error for Strings longer than 10 characters', () => {
  // Arrange
  const input = "Microverse123";
  // Act
  const output = self.stringLength(input);
  // Assert
  expect(output).toBe(10);
});

test('should throw an error for Strings less than 1 character', () => {
  // Arrange
  const input = "";
  // Act
  const output = self.stringLength(input);
  // Assert
  expect(output).toBe(1);
});
});
