import {
  MAX_INTEGER, getRandomInteger, askQuestion,
  isCorrect, getAnswer, countCorrectAnswers,
} from '../src/index.js';


const taskText = 'What is the result of the expression?';

const operationType = {
  '+': function addit(x, y) { return x + y; },
  '-': function subtract(x, y) { return x - y; },
  '*': function multiplicate(x, y) { return x * y; },
};

const getRandomOperation = (operations) => Object.keys(operations)[
  getRandomInteger(Object.keys(operations).length)];

const checkCalculation = (x = getRandomInteger(MAX_INTEGER),
  y = getRandomInteger(MAX_INTEGER), operation = getRandomOperation(operationType)) => {
  askQuestion(`${x}${operation}${y}`);
  return isCorrect(Number(getAnswer()), operationType[operation](x, y));
};


export default function startBrainCalc() {
  countCorrectAnswers(taskText, checkCalculation);
}
