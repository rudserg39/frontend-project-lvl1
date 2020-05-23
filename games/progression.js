import {
  MAX_INTEGER, getRandomInteger, askQuestion,
  isCorrect, getAnswer, countCorrectAnswers,
} from '../src/index.js';


const ELEMENTS_TO_ADD = 9;

const taskText = 'What number is missing in the progression?';

const getProgression = () => {
  const [start, step] = [getRandomInteger(MAX_INTEGER), getRandomInteger(MAX_INTEGER)];
  const progression = [start];
  for (let i = 0; i < ELEMENTS_TO_ADD; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const getHiddenElement = (progression) => progression[getRandomInteger(progression.length)];

const checkHiddenElement = (progression = getProgression(), hiddenElement = getHiddenElement(progression), string = progression.join(' ').replace(`${hiddenElement}`, '..')) => {
  askQuestion(string);
  return isCorrect(Number(getAnswer()), hiddenElement);
};


export default function startBrainProgression() {
  countCorrectAnswers(taskText, checkHiddenElement);
}
