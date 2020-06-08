import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (expression) => expression % 2 === 0;

const getCorrectAnswer = (expression) => (isEven(expression) ? 'yes' : 'no');

const prepareGameData = () => {
  const expression = getRandomInteger(1, 15);
  const correctAnswer = getCorrectAnswer(expression);
  return [expression, correctAnswer];
};


export default () => gameRunner(taskText, prepareGameData);
