import { MAX_INTEGER, getRandomInteger } from '../helpers/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (x, y) => {
  const [min, max] = [Math.min(x, y), Math.max(x, y)];
  let divisor = min;
  while (divisor > 0) {
    if (min % divisor === 0 && max % divisor === 0) {
      return divisor;
    }
    divisor -= 1;
  }
  return divisor === 0 ? max : divisor;
};

const getTaskData = () => {
  const [x, y] = [getRandomInteger(MAX_INTEGER), getRandomInteger(MAX_INTEGER)];
  return [`${x} ${y}`, findGreatestCommonDivisor(x, y)];
};


export default function startBrainEven() {
  gameRunner(taskText, getTaskData);
}
