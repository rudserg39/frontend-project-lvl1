import {
  MAX_INTEGER, getRandomInteger, askQuestion,
  isCorrect, getAnswer, countCorrectAnswers,
} from '../src/index.js';


const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (integer) => {
  for (let i = 2; i < integer; i += 1) {
    if (integer % i === 0) {
      return false;
    }
  }
  return integer > 1;
};

const checkPrime = (integer = getRandomInteger(MAX_INTEGER)) => {
  askQuestion(`${integer}`);
  return isCorrect(getAnswer(), isPrime(integer) ? 'yes' : 'no');
};

export default function startBrainPrime() {
  countCorrectAnswers(taskText, checkPrime);
}
