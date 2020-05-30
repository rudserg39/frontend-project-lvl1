import { MAX_INTEGER, getRandomInteger } from '../src/utils.js';
import gameRunner from '../src/index.js';


const ELEMENTS_TO_ADD = 10;

const UNKNOWN_ELEMENT = '..';

const taskText = 'What number is missing in the progression?';

const generateProgression = (start, step, length = 10) => {
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getHiddenElement = (progression) => progression[getRandomInteger(progression.length - 1)];

const getTaskData = () => {
  const progression = generateProgression(getRandomInteger(MAX_INTEGER),
    getRandomInteger(MAX_INTEGER), ELEMENTS_TO_ADD);
  const hiddenElement = getHiddenElement(progression);
  const expression = progression.join(' ').replace(`${hiddenElement}`, UNKNOWN_ELEMENT);
  return [expression, hiddenElement];
};


export default () => gameRunner(taskText, getTaskData);
