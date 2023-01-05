'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
};
let displayScore = function(score) {
  document.querySelector(".score").textContent = score;
};
let bodyBackground = function(color) {
document.querySelector("body").style.backgroundColor = color;
};
let secretNumberText = function(text) {
  document.querySelector(".number").textContent = text;
};
let secretNumberStyle = function(width) {
  document.querySelector(".number").style.width = width;
};


document.querySelector(".check").addEventListener("click", function() {
  let guess = Number(document.querySelector(".guess").value);
  //when player don`t write the number but click button 
  if(!guess) {
    displayMessage(`No number`);   

    //scenario when player win the game
  } else if (guess === secretNumber) {
    displayMessage(`Correct number !!!`); 
    secretNumberText(secretNumber);    
    bodyBackground("green");
    secretNumberStyle("30rem");   

    //scenario when user is wrong
  } else if (guess !== secretNumber) {
    if(score > 1) { //we made countdown of score each time we press the button
      displayMessage(guess > secretNumber ? `Too high` : `Too low`);      
      score--; 
      displayScore(score);            
    } else {
      displayMessage(`Game Over`);
      displayScore(0);       
    }    
  }  
});

//manipulations when "again" button were pressed
document.querySelector(".again").addEventListener("click", function() {
  
  highScore < score ? (highScore = score ) : highScore  //set high score
  document.querySelector(".highscore").textContent = highScore; 

  secretNumber = Math.trunc(Math.random() * 20) + 1; //reset the secret number
  score = 20;

  displayMessage(`Start guessing...`);
  secretNumberText("?");  
  displayScore(score); 
  document.querySelector(".guess").value = ""; //clean the input 
  bodyBackground("#222222"); 
  secretNumberStyle("15rem");  
});