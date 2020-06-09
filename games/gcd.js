import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (num1, num2) => (num2 === 0 ? num1 : findGreatestCommonDivisor(num2, num1 % num2));

const prepareGameData = () => {
  const num1 = getRandomInteger(1, 15);
  const num2 = getRandomInteger(1, 15);
  const expression = `${num1} ${num2}`;
  const correctAnswer = String(findGreatestCommonDivisor(num1, num2));
  return [expression, correctAnswer];
};


export default () => gameRunner(gameDescription, prepareGameData);
