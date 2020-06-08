import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (x, y) => (y === 0 ? x : findGreatestCommonDivisor(y, x % y));

const prepareGameData = () => {
  const [x, y] = [getRandomInteger(1, 15), getRandomInteger(1, 15)];
  const expression = `${x} ${y}`;
  const correctAnswer = String(findGreatestCommonDivisor(x, y));
  return [expression, correctAnswer];
};


export default () => gameRunner(taskText, prepareGameData);
