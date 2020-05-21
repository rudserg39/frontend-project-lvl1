#!/usr/bin/env node

import {
  MAX_INTEGER, getRandomInteger, getAnswer, isCorrect,
  askQuestion, countCorrectAnswers, getRandomExpression,
} from '../src/index.js';


const expression = {
  ADDIT(x = getRandomInteger(MAX_INTEGER), y = getRandomInteger(MAX_INTEGER)) { console.log(askQuestion(`${x}+${y}`)); return isCorrect(Number(getAnswer()), x + y); },
  SUBTRACT(x = getRandomInteger(MAX_INTEGER), y = getRandomInteger(MAX_INTEGER)) { console.log(askQuestion(`${x}-${y}`)); return isCorrect(Number(getAnswer()), x - y); },
  MULTIPLY(x = getRandomInteger(MAX_INTEGER), y = getRandomInteger(MAX_INTEGER)) { console.log(askQuestion(`${x}*${y}`)); return isCorrect(Number(getAnswer()), x * y); },
};

countCorrectAnswers('What is the result of the expression?', getRandomExpression(expression));
