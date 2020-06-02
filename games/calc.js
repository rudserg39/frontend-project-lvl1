import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculateExpression = (operation, x, y) => {
  switch (operation) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return null;
  }
};

const prepareGameData = () => {
  const [x, y] = [getRandomInteger(1, 15), getRandomInteger(1, 15)];
  const operation = operations[getRandomInteger(0, operations.length - 1)];
  const expression = `${x}${operation}${y}`;
  const result = calculateExpression(operation, x, y);
  return [expression, String(result)];
};

export default () => gameRunner(taskText, prepareGameData);
