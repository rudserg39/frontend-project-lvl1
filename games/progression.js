import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length = 10) => {
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const changeProgressionElement = (progression, elementIndex, newElement) => {
  const progressionToChange = progression;
  progressionToChange[elementIndex] = newElement;
  return progressionToChange;
};

const prepareGameData = () => {
  const progression = generateProgression(getRandomInteger(1, 15),
    getRandomInteger(1, 15));
  const elementIndexToHide = getRandomInteger(0, progression.length - 1);
  const correctAnswer = String(progression[elementIndexToHide]);
  const expression = changeProgressionElement(progression, elementIndexToHide, '..').join(' ');
  return [expression, correctAnswer];
};


export default () => gameRunner(gameDescription, prepareGameData);
