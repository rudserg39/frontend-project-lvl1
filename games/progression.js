import getRandomInteger from '../src/utils.js';
import gameRunner from '../src/index.js';


const gameDescription = 'What number is missing in the progression?';

const generateProgression = (firstElement, progressionStep, length = 10) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstElement + progressionStep * i);
  }
  return progression;
};

const changeProgressionElement = (progression, elementIndex, newElement) => {
  const progressionToChange = progression;
  progressionToChange[elementIndex] = newElement;
  return progressionToChange;
};

const prepareGameData = () => {
  const firstElement = getRandomInteger(1, 15);
  const progressionStep = getRandomInteger(1, 15);
  const progression = generateProgression(firstElement, progressionStep);
  const elementIndexToHide = getRandomInteger(0, progression.length - 1);
  const correctAnswer = String(progression[elementIndexToHide]);
  const processedProgression = changeProgressionElement(progression, elementIndexToHide, '..');
  const expression = processedProgression.join(' ');
  return [expression, correctAnswer];
};


export default () => gameRunner(gameDescription, prepareGameData);
