import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (expression) => {
  for (let i = 2; i < expression; i += 1) {
    if (expression % i === 0) {
      return false;
    }
  }
  return expression > 1;
};

const getCorrectAnswer = (expression) => (isPrime(expression) ? 'yes' : 'no');

const prepareGameData = () => {
  const expression = getRandomInteger(1, 15);
  const correctAnswer = getCorrectAnswer(expression);
  return [expression, correctAnswer];
};


export default () => gameRunner(taskText, prepareGameData);
