import readlineSync from 'readline-sync';


const ANSWERS_LIMIT = 3;

const askName = () => readlineSync.question('May I have your name? ');

const getAnswer = () => readlineSync.question('Your answer: ');

export default function gameRunner(taskText, expression) {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log(taskText);

  let counter = 0;

  while (counter < ANSWERS_LIMIT) {
    const [taskData, correctAnswer] = expression();

    if (taskData) {
      console.log(`Question ${taskData}`);
      const answer = getAnswer();
      if (answer === String(correctAnswer)) {
        counter += 1;
        console.log('Correct!');
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log(`Let's try again ${name}!`);
        return;
      }
    } else {
      console.log('Expression error. Please, restart the game.');
      return;
    }

    if (counter === ANSWERS_LIMIT) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
