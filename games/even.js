import { MAX_INTEGER, getRandomInteger } from '../src/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (integer) => integer % 2 === 0;

const getCorrectAnswer = (integer) => (isEven(integer) ? 'yes' : 'no');

const getTaskData = () => {
  const integer = getRandomInteger(MAX_INTEGER);
  return [integer, getCorrectAnswer(integer)];
};


export default () => gameRunner(taskText, getTaskData);
