#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';


const getName = () => {
  console.log('Welcome to the Brain Games!');
  return askName();
};


const name = getName();

const integer = {
  MIN: 1,
  MAX: 16,
};

const answerOption = {
  POSITIVE: 'yes',
  NEGATIVE: 'no',
};

const ANSWERS_LIMIT = 3;


const getRandomInteger = () => Math.floor(Math.random() * Math.floor(integer.MAX));

const getAnswer = () => readlineSync.question('Your answer: ');

const isEven = (num) => num % 2 === 0;

const checkAnswer = (randomInteger) => {
  if (isEven(randomInteger)) {
    return answerOption.POSITIVE;
  }
  return answerOption.NEGATIVE;
};

const isCorrect = (randomInteger, answer) => {
  if (answer === checkAnswer(randomInteger)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${checkAnswer(randomInteger)}".`);
  return false;
};

const askQuestion = () => {
  const randomInteger = getRandomInteger();
  console.log(`Question: ${randomInteger}`);
  const answer = getAnswer();
  return isCorrect(randomInteger, answer);
};

const countCorrectAnswers = () => {
  console.log(`Answer "${answerOption.POSITIVE}" if the number is even, otherwise answer "${answerOption.NEGATIVE}".`);
  let counter = 0;

  while (counter < ANSWERS_LIMIT) {
    if (askQuestion()) {
      counter += 1;
    } else {
      console.log(`Let's try again ${name}!`);
      return;
    }
  }

  if (counter === ANSWERS_LIMIT) {
    console.log(`Congratulations, ${name}!`);
  }
};

countCorrectAnswers();
