import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateExpression = (operator, x, y) => {
  switch (operator) {
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
  const operator = operators[getRandomInteger(0, operators.length - 1)];
  const expression = `${x}${operator}${y}`;
  const correctAnswer = String(calculateExpression(operator, x, y));
  return [expression, correctAnswer];
};

export default () => gameRunner(taskText, prepareGameData);
