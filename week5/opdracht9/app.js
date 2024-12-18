const choiceC = document.getElementById("computer-choice")
const choiceP = document.getElementById("player-choice")
const result = document.getElementById("result")

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id
    choiceP.innerHTML = player
    choiceC.innerHTML = computer
    generateComputerChoice()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)
}

if (randomNumber == 1) {
    computer = "rock"
} else if(randomNumber == 2) {
    computer = "paper"
} else if(randomNumber == 3) {
    computer = "scissors"
}

function getResult() {
    if (computer == player) {
        result.innerHTML = "Gelijk spel"
    }
}