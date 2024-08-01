alert("welcom to rock paper scissors")
const rockButton = document.getElementById("rockButton")
const paperButton = document.getElementById ("paperButton")
const scissorButton = document.getElementById("scissorButton")
const playerButtonthing = document.getElementById("playerButtonthing")
const randomInteger = Math.floor(Math.random() * 3) + 1;


playerButtonthing.addEventListener ("click", computerBrain) 

function computerBrain(){
    if (randomInteger === 1) {
        document.getElementById("computerBrain").textContent = "rock" 
    }
    else if (randomInteger === 2) {
        document.getElementById("computerBrain").textContent = "paper"
    }
    else {
        document.getElementById("computerBrain").textContent = "scissors"
    }
    }