const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });



let secretNumber = 5;

function checkGuess(guess){
    if(guess > secretNumber){
        console.log('too high');
        return false;
    }
    if(guess < secretNumber){
        console.log('too low');
        return false;
    }
    if(guess === secretNumber){
        console.log('correct');
        return true;
    }
}


function askGuess(num){}
