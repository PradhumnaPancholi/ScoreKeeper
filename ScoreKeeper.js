alert("Powered by JavaScript");

//for selecting player 1 (button)//
var p1Button = document.querySelector("#p1");
//for selecting  player 2 (button)//
var p2Button = document.querySelector("#p2");
//for reset button//
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var winningScore = 7;

//for p1 button functionality//
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            console.log("p1 Won");
            gameOver = true;
        }   
        p1Display.textContent = p1Score;    
    }

});

//for p2 button functionality//
p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            console.log("p1 WOn");
            gameOver = true;
        }
    }
    p2Display.textContent = p2Score;
});

//for reset button functionality//
resetButton