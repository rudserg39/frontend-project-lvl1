import {
  MAX_INTEGER, getRandomInteger, askQuestion,
  isCorrect, getAnswer, countCorrectAnswers,
} from '../src/index.js';


const taskText = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (x, y) => {
  const [min, max] = [Math.min(x, y), Math.max(x, y)];
  let divisor = min;
  while (divisor > 0) {
    if (min % divisor === 0 && max % divisor === 0) {
      return divisor;
    }
    divisor -= 1;
  }
  return divisor === 0 ? max : divisor;
};

const checkGreatestCommonDivisor = (x = getRandomInteger(MAX_INTEGER),
  y = getRandomInteger(MAX_INTEGER)) => {
  askQuestion(`${x} ${y}`);
  return isCorrect(Number(getAnswer()), findGreatestCommonDivisor(x, y));
};


export default function startBrainEven() {
  countCorrectAnswers(taskText, checkGreatestCommonDivisor);
}
