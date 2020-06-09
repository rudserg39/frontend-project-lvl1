import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (integer) => integer % 2 === 0;

const prepareGameData = () => {
  const expression = getRandomInteger(1, 15);
  const correctAnswer = isEven(expression) ? 'yes' : 'no';
  return [expression, correctAnswer];
};


export default () => gameRunner(gameDescription, prepareGameData);
