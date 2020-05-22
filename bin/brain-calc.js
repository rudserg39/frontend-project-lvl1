#!/usr/bin/env node

import {
  MAX_INTEGER, getRandomInteger, askQuestion, isCorrect,
  getAnswer, countCorrectAnswers, getRandomExpression,
} from '../src/index.js';


const expression = {
  CHECK_ADDITION(x = getRandomInteger(MAX_INTEGER), y = getRandomInteger(MAX_INTEGER)) { askQuestion(`${x}+${y}`); return isCorrect(Number(getAnswer()), x + y); },
  CHECK_SUBTRACTION(x = getRandomInteger(MAX_INTEGER), y = getRandomInteger(MAX_INTEGER)) { askQuestion(`${x}-${y}`); return isCorrect(Number(getAnswer()), x - y); },
  CHECK_MULTIPLICATION(x = getRandomInteger(MAX_INTEGER), y = getRandomInteger(MAX_INTEGER)) { askQuestion(`${x}*${y}`); return isCorrect(Number(getAnswer()), x * y); },
};

countCorrectAnswers('What is the result of the expression?', getRandomExpression(expression));
