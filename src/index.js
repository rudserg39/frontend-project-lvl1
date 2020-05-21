import readlineSync from 'readline-sync';

export const MAX_INTEGER = 16;

const ANSWERS_LIMIT = 3;

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getName = () => {
  console.log('Welcome to the Brain Games!');
  return askName();
};

const name = getName();

export const getRandomInteger = (max) => Math.floor(Math.random() * Math.floor(max));

export const getAnswer = () => readlineSync.question('Your answer: ');

export const isCorrect = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

export const askQuestion = (expression) => `Question: ${expression}`;

export const countCorrectAnswers = (greeting, expression) => {
  console.log(greeting);
  let counter = 0;
  while (counter < ANSWERS_LIMIT) {
    if (expression()) {
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

export const getRandomExpression = (expression) => expression[
  Object.keys(expression)[getRandomInteger(Object.keys(expression).length)]
];
