import { MAX_INTEGER, getRandomInteger } from '../src/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (x, y) => (y === 0 ? x : findGreatestCommonDivisor(y, x % y));

const getTaskData = () => {
  const [x, y] = [getRandomInteger(MAX_INTEGER), getRandomInteger(MAX_INTEGER)];
  return [`${x} ${y}`, findGreatestCommonDivisor(x, y)];
};


export default () => gameRunner(taskText, getTaskData);
