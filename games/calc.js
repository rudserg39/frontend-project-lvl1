import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateExpression = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const prepareGameData = () => {
  const num1 = getRandomInteger(1, 15);
  const num2 = getRandomInteger(1, 15);
  const operator = operators[getRandomInteger(0, operators.length - 1)];
  const expression = `${num1}${operator}${num2}`;
  const correctAnswer = String(calculateExpression(operator, num1, num2));
  return [expression, correctAnswer];
};


export default () => gameRunner(gameDescription, prepareGameData);
