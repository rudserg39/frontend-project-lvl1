import { MAX_INTEGER, getRandomInteger } from '../helpers/utils.js';
import gameRunner from '../src/index.js';


const ELEMENTS_TO_ADD = 9;

const UNKNOWN_ELEMENT = '..';

const taskText = 'What number is missing in the progression?';

const getProgression = () => {
  const [start, step] = [getRandomInteger(MAX_INTEGER), getRandomInteger(MAX_INTEGER)];
  const progression = [start];
  for (let i = 0; i < ELEMENTS_TO_ADD; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const getHiddenElement = (progression) => progression[getRandomInteger(progression.length - 1)];

const getTaskData = () => {
  const progression = getProgression();
  const hiddenElement = getHiddenElement(progression);
  const expression = progression.join(' ').replace(`${hiddenElement}`, UNKNOWN_ELEMENT);
  return [expression, hiddenElement];
};


export default function startBrainProgression() {
  gameRunner(taskText, getTaskData);
}
