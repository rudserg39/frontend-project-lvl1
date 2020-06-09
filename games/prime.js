import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (integer) => {
  for (let divider = 2; divider < integer; divider += 1) {
    if (integer % divider === 0) {
      return false;
    }
  }
  return integer > 1;
};

const prepareGameData = () => {
  const expression = getRandomInteger(1, 15);
  const correctAnswer = isPrime(expression) ? 'yes' : 'no';
  return [expression, correctAnswer];
};


export default () => gameRunner(gameDescription, prepareGameData);
