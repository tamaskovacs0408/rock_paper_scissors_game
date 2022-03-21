// Declaring variables
const userChoiceDisplay = document.querySelector('#js-user-choice');
const cpuChoiceDisplay = document.querySelector('#js-computer-choice');
const resultDisplay = document.querySelector('#js-result');
const possibleChoices = document.querySelectorAll(".btn");
const userPointsDisplay = document.querySelector("#js-points-user");
const cpuPointsDisplay = document.querySelector("#js-points-cpu");

let userChoice;
let cpuChoice;
let result;
let userPoints = 0;
let cpuPoints = 0;
// Making addEventListener function
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateCpuChoice();
    getResult();
}))
// Random number generating for the possible choices of rock, paper, scissors
function generateCpuChoice() {
    const randNum = Math.floor(Math.random() * possibleChoices.length) + 1; // standard from 0 to 2, that's we need the + 1
    console.log(randNum);

    if (randNum === 1) {
        cpuChoice = "Rock"
    };
    if (randNum === 2) {
        cpuChoice = "Paper"
    };
    if (randNum === 3) {
        cpuChoice = "Scissors"
    };

    cpuChoiceDisplay.innerHTML = cpuChoice;
}
// Making conditions for the game
function getResult() {
    if (cpuChoice === userChoice) {
        result = "Draw."
    };
    if (cpuChoice === "Rock" && userChoice === "Paper") {
        result = "User won!"
        userPoints += 1;
    };
    if (cpuChoice === "Rock" && userChoice === "Scissors") {
        result = "Computer won!"
        cpuPoints += 1;
    };
    if (cpuChoice === "Paper" && userChoice === "Scissors") {
        result = "User won!"
        userPoints += 1;
    };
    if (cpuChoice === "Paper" && userChoice === "Rock") {
        result = "Computer won!"
        cpuPoints += 1;
    };
    if (cpuChoice === "Scissors" && userChoice === "Rock") {
        result = "User won!"
        userPoints += 1;
    };
    if (cpuChoice === "Scissors" && userChoice === "Paper") {
        result = "Computer won!"
        cpuPoints += 1;
    }

    resultDisplay.innerHTML = result;
    userPointsDisplay.innerHTML = userPoints;
    cpuPointsDisplay.innerHTML = cpuPoints;
}
