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
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

const guessing = function(){
    
    const guesss = document.querySelector('.guess').value;
    if(!guesss){
        document.querySelector('.message').textContent = '⛔️ No number!'; 
    }
    const guess = Number(guesss);
    console.log(guess);
    if (guess > 20 || guess < 1){
        document.querySelector('.message').textContent = '⛔️ the number is Between 1 and 20'; 
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
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

const   playAgain = function(){
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    score = 10;
    document.querySelector('.score').textContent = score;
}

const savingHighScore = function(newScore,oldScore){
    
};
document.querySelector('.check').addEventListener('click',guessing);
document.querySelector('.again').addEventListener('click', playAgain);