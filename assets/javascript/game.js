$(document).ready(function(){
    
     
//Scores
var userScore = 0;
var computerScore = 0;

//Win/loss variables
var userWin = 0;
var userLose = 0;


var max = 300;
var min = 15;
//Function to get random number
var randomNum = Math.floor(Math.random () * (max - min + 1) + min);
console.log(randomNum);
  
 var gemRan = Math.floor(Math.random() * 25) + 1; 

  //Start/Restart Game
  var startGame = function(){

userScore = 0;
computerScore = randomNum;

$("#diamond").on("click", function(){
var rand = gemRan;
var currentscore = $("#counter").text();
$("#counter").text(rand + currentscore);

}); 

$("#blue").on("click", function(){
var rand = gemRan;
var currentscore = $("#counter").text();
$("#counter").text(rand + currentscore);

}); 

$("#purple").on("click", function(){
var rand = gemRan;
var currentscore = $("#counter").text();
$("#counter").text(rand + currentscore);

}); 

$("#ruby").on("click", function(){
var rand = gemRan;
var currentscore = $("#counter").text();
$("#counter").text(rand + currentscore);

}); 

//Lets chnage the value of html id for user/computer score
$("#user_score").text(userScore);
$("#computer_score").text(computerScore);
}

//Find out if the user win/lost
var userResult = function(){
    if(userScore === computerScore){
        console.log("Congrats you won");
        userWin++;
        $("#wins").text(userWin);
        startGame();
    }else if(userScore > computerScore){
        console.log("Sorry you lost");
        userLoss++;
        $("#loss").text(userLose);
        startGame();

    }
}


}); 