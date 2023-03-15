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
let score = 20;
document.querySelector('.number').textContent = secretNumber;



const guessing = function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No number!'; 
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
    }
    else if(guess > secretNumber){
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score; 
    }
    else if(guess < secretNumber){
        document.querySelector('.message').textContent = '📉 Too low!';
        score--;
        document.querySelector('.score').textContent = score; 
    }
};
document.querySelector('.check').addEventListener('click',guessing);