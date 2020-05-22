#!/usr/bin/env node

import {
  MAX_INTEGER, getRandomInteger, askQuestion, isCorrect,
  getAnswer, countCorrectAnswers, getRandomExpression,
} from '../src/index.js';


const isEven = (integer) => integer % 2 === 0;

const expression = {
  CHECK_PARITY(integer = getRandomInteger(MAX_INTEGER)) {
    askQuestion(integer);
    return isCorrect(getAnswer(), isEven(integer) ? 'yes' : 'no');
  },
};

countCorrectAnswers('Answer "yes" if the number is even, otherwise answer "no".', getRandomExpression(expression));
