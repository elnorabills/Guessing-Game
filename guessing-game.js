const readline = require("readline");

const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

function randomInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Minimum and Maximum are both inclusive
}

function checkGuess(guess, secret) {
  let number = Number(guess);

  if (isNaN(number)) {
    console.log("Not a number! Try again!!");
    return false;
  }
  if (number > secret) {
    console.log("Too high");
    return false;
  }
  if (number < secret) {
    console.log("Too low");
    return false;
  }
  if (number === secret) {
    console.log("Correct");
    return true;
  }
}

function askGuess(secret) {
  rl.question("Enter a guess: ", (answer) => {
    if (checkGuess(answer, secret)) {
      console.log("You Win!");
      rl.close();
    } else {
      askGuess(secret);
    }
  });
}

// const maxAnswer = (answer) => {
//     console.log("Enter a max number: ");
// }

// function askRange() {
//     rl.question("Enter a min number: ", (min) => {
//         min = Number(min);
//         const askMax = () => {
//             rl.question("Enter a max number: ", (max) => {
//                 max = Number(max);
//                 if(isNaN(max)){
//                     console.log('Not a number! Try again!');
//                     return askMax();
//                 }
//                 console.log(`I'm thinking of a number between ${min} and ${max}...`);
//                 let secretNumber = randomInRange(min, max);
//                 askGuess(secretNumber);
//             })
//         }
//         if(isNaN(min)){
//             console.log('Not a number! Try again!');
//             return askRange();
//         }
//         askMax();
//     });
// }

const askRange = () => {
  const askMax = (min) => {
    min = Number(min);
    if (isNaN(min)) {
      console.log("Not a number! Try again!");
      askRange();
    }
    rl.question("Enter a max number: ", (max) => {
      max = Number(max);
      if (isNaN(max)) {
        console.log("Not a number! Try again!");
        askMax();
      }
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      let secretNumber = randomInRange(min, max);
      askGuess(secretNumber);
    });
  };
  rl.question("Enter a min number: ", askMax);
};

askRange();

//do not need to console.log() askGuess
//becuase it does not have a return value (the console.log gives us undefined)
