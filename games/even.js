import {
  MAX_INTEGER, getRandomInteger, askQuestion,
  isCorrect, getAnswer, countCorrectAnswers,
} from '../src/index.js';


const taskText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (integer) => integer % 2 === 0;

const checkParity = (integer = getRandomInteger(MAX_INTEGER)) => {
  askQuestion(integer);
  return isCorrect(getAnswer(), isEven(integer) ? 'yes' : 'no');
};


export default function startBrainEven() {
  countCorrectAnswers(taskText, checkParity);
}
