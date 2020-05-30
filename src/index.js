import readlineSync from 'readline-sync';


const ANSWERS_LIMIT = 3;

export default function gameRunner(taskText, expression) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(taskText);

  for (let i = 1; i <= ANSWERS_LIMIT; i += 1) {
    const [taskData, correctAnswer] = expression();
    console.log(`Question ${taskData}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again ${name}!`);
      return;
    }

    if (i === ANSWERS_LIMIT) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
