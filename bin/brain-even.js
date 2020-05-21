#!/usr/bin/env node

import {
  MAX_INTEGER, getRandomInteger, getAnswer, isCorrect,
  askQuestion, countCorrectAnswers, getRandomExpression,
} from '../src/index.js';


const expression = {
  CHECK_PARITY(integer = getRandomInteger(MAX_INTEGER)) {
    console.log(askQuestion(integer));
    return isCorrect(getAnswer(), integer % 2 === 0 ? 'yes' : 'no');
  },
};

countCorrectAnswers('Answer "yes" if the number is even, otherwise answer "no".', getRandomExpression(expression));
