'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !';
console.log(document.querySelector('.message').textContent);


console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = 130;
console.log(document.querySelector('.score').textContent);

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 10;
// document.querySelector('.number').textContent = secretNumber;

const guessing = function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No number!'; 
    }
    else if (guess > 20){
        document.querySelector('.message').textContent = '⛔️ Choose a number between 0 and 20'; 
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
    }
    else if(guess > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '💥 You lost the game!';
        }
    }
    else if(guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '💥 You lost the game!';
        }
    }
};
document.querySelector('.check').addEventListener('click',guessing);