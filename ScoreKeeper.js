alert("Powered by JavaScript");

//for selecting player 1 (button)//
var p1Button = document.querySelector("#p1");
//for selecting  player 2 (button)//
var p2Button = document.querySelector("#p2");
//for input of winning number//
var p = document.querySelector("p");
var numInput = document.querySelector("input");
//for displaying winning number//
var winningScoreDisplay = document.querySelector("p span");
//for reset button//
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var winningScore = 7;
function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

//for p1 button functionality//
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }   
        p1Display.textContent = p1Score; 
 
    }

});

//for p2 button functionality//
p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        console.log(p2Score, winningScore)
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
    }
    p2Display.textContent = p2Score;

});

//for reset button functionality//
resetButton.addEventListener("click", function(){
    reset();
});

//for winning num input//

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});
