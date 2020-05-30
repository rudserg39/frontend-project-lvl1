import { MAX_INTEGER, getRandomInteger } from '../src/utils.js';
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

const getTaskData = () => {
  const [x, y] = [getRandomInteger(MAX_INTEGER), getRandomInteger(MAX_INTEGER)];
  const operation = operations[getRandomInteger(operations.length - 1)];
  const expression = `${x}${operation}${y}`;
  const result = calculateExpression(operation, x, y);
  return [expression, result];
};


export default () => gameRunner(taskText, getTaskData);
