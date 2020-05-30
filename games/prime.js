import { MAX_INTEGER, getRandomInteger } from '../src/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (integer) => {
  for (let i = 2; i < integer; i += 1) {
    if (integer % i === 0) {
      return false;
    }
  }
  return integer > 1;
};

const getTaskData = () => {
  const integer = getRandomInteger(MAX_INTEGER);
  return [integer, isPrime(integer) ? 'yes' : 'no'];
};


export default () => gameRunner(taskText, getTaskData);
