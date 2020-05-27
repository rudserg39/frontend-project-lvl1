import { MAX_INTEGER, getRandomInteger } from '../helpers/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getTaskData = () => {
  const [x, y] = [getRandomInteger(MAX_INTEGER), getRandomInteger(MAX_INTEGER)];
  const operation = operations[getRandomInteger(operations.length - 1)];
  const expression = `${x}${operation}${y}`;

  switch (operation) {
    case '+':
      return [expression, x + y];
    case '-':
      return [expression, x - y];
    case '*':
      return [expression, x * y];
    default:
      return [];
  }
};


export default function startBrainCalc() {
  gameRunner(taskText, getTaskData);
}
