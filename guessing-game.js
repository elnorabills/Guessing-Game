const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });



let secretNumber = 5;

function checkGuess(guess){
    let number = Number(guess);

    if(isNaN(number)) {
        console.log("Not a number! Try again!!");
        return false;
    }

    if(number > secretNumber){
        console.log('too high');
        return false;
    }
    if(number < secretNumber){
        console.log('too low');
        return false;
    }
    if(number === secretNumber){
        console.log('correct');
        return true;
    }
}


function askGuess(answer){
    rl.question("Enter a guess: ", (answer) => {
        checkGuess(answer);
        if (answer === secretNumber) {
            console.log("You Win!");
            rl.close();
            return;
        }
        askGuess(answer);
    })
}

console.log(askGuess());
