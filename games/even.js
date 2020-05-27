import { MAX_INTEGER, getRandomInteger } from '../helpers/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (integer) => integer % 2 === 0;

const getTaskData = () => {
  const integer = getRandomInteger(MAX_INTEGER);
  return [integer, isEven(integer) ? 'yes' : 'no'];
};


export default function startBrainEven() {
  gameRunner(taskText, getTaskData);
}
