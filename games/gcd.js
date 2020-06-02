import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (x, y) => (y === 0 ? x : findGreatestCommonDivisor(y, x % y));

const prepareGameData = () => {
  const [x, y] = [getRandomInteger(1, 15), getRandomInteger(1, 15)];
  return [`${x} ${y}`, String(findGreatestCommonDivisor(x, y))];
};


export default () => gameRunner(taskText, prepareGameData);
