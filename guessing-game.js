const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Minimum and Maximum are both inclusive
}

let secretNumber = randomInRange(0, 100);

function checkGuess(guess){
    let number = Number(guess);

    if(isNaN(number)) {
        console.log("Not a number! Try again!!");
        return false;
    }
    if(number > secretNumber){
        console.log('Too high');
        return false;
    }
    if(number < secretNumber){
        console.log('Too low');
        return false;
    }
    if(number === secretNumber){
        console.log('Correct');
        return true;
    }
}


function askGuess(){
    rl.question("Enter a guess: ", (answer) => {
        if(checkGuess(answer)) {
            console.log("You Win!");
            rl.close();
        }
        else {
            askGuess(answer);
        }
    });
}

const maxAnswer = (answer) => {
    console.log("Enter a max number: ");
}
function askRange() {
    rl.question("Enter a min number: ", maxAnswer);
}

//askGuess();

//do not need to console.log() askGuess
//becuase it does not have a return value (the console.log gives us undefined)
