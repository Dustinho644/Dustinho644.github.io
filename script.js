alert("welcom to rock paper scissors")
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById ("paperButton");
const scissorButton = document.getElementById("scissorButton");
const playerButtonthing = document.getElementById("playerButtonthing");

let userChoice;
let randomInteger;
let points = 0;

rockButton.addEventListener ("click", function () {
    userChoice = 1;
}) 


paperButton.addEventListener ("click", function () {
    userChoice = 2;
}) 


scissorButton.addEventListener ("click", function () {
    userChoice = 3;
}) 

playerButtonthing.addEventListener ("click", displayMessages) 

function computerBrain(){
    randomInteger = Math.floor(Math.random() * 3) + 1;
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

function compare(){

    if (userChoice === randomInteger) {
        document.getElementById("messageThing").textContent = "you got a tie, yay."
        document.body.style.backgroundColor="white"
    }
    else if ((userChoice === 1) && (randomInteger === 2)) {
        document.getElementById("messageThing").textContent = "good try PERSON"
        document.body.style.backgroundColor="red"
        points--
    }
   
    else if ((userChoice === 1) && (randomInteger === 3)) {
        document.getElementById("messageThing").textContent = "you win... Is that good?"
        document.body.style.backgroundColor="green"
        points++
    }

    else if ((userChoice === 2) && (randomInteger === 1)) {
        document.getElementById("messageThing").textContent = "OMG wow:)"
        document.body.style.backgroundColor="green"
        points++
    }

    else if ((userChoice === 2) && (randomInteger === 3)) {
        document.getElementById("messageThing").textContent = "awww. you lost:("
        document.body.style.backgroundColor="red"
        points--
    }

    else if ((userChoice === 3) && (randomInteger === 1)) {
        document.getElementById("messageThing").textContent = "you lost... is that bad?"
        document.body.style.backgroundColor="red"
        points--
    }

    else {
        document.getElementById("messageThing").textContent = "Sooo... ummmmm...good job I guss";
        document.body.style.backgroundColor="green";
        points++
    }
}

function displayMessages(){
    // attempts++
    computerBrain()
    compare()
    console.log(userChoice)
    console.log(randomInteger)
    document.getElementById("displayPoints").textContent = `${points}`
}

