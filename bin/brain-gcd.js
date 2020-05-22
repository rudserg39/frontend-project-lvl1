#!/usr/bin/env node

import {
  MAX_INTEGER, getRandomInteger, askQuestion, isCorrect,
  getAnswer, countCorrectAnswers, getRandomExpression,
} from '../src/index.js';


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

const expression = {
  CHECK_GREATEST_COMMON_DIVISOR(x = getRandomInteger(MAX_INTEGER),
    y = getRandomInteger(MAX_INTEGER)) {
    askQuestion(`${x} ${y}`);
    return isCorrect(Number(getAnswer()), findGreatestCommonDivisor(x, y));
  },
};

countCorrectAnswers('Find the greatest common divisor of given numbers.', getRandomExpression(expression));
