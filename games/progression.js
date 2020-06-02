import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const taskText = 'What number is missing in the progression?';

const generateProgression = (start, step, length = 10) => {
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const prepareGameData = () => {
  const progression = generateProgression(getRandomInteger(1, 15),
    getRandomInteger(1, 15));
  const hiddenElement = progression[getRandomInteger(0, progression.length - 1)];
  const expression = progression.join(' ').replace(hiddenElement, '..');
  return [expression, String(hiddenElement)];
};


export default () => gameRunner(taskText, prepareGameData);
