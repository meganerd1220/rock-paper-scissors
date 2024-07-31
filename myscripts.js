console.log("Connected to HTML!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 300);
    console.log(choice);
    
    if (choice < 100) {// 0-99
        console.log("cc: rock");
        return "rock";
    } else if (choice <= 200 && choice >= 100) { // 100-200
            console.log("cc: paper");
            return "paper";
    } else if (choice >= 201) { // 201-300
            console.log("cc: scissors");
            return "scissors";
    } else {
        console.log("problem");
    }
}

function getHumanChoice() {
    let userInput = prompt(`Enter the number that corresponds to your choice:
    1. Rock
    2. Paper
    3. Scissors`);

    console.log("userInput: ", userInput);

    switch (userInput) {
        case "1":
            alert("You chose Rock");
            console.log("hc: rock");
            return "rock";
        case "2":
            alert("You chose Paper");
            console.log("hc: paper");
            return "paper";
        case "3":
            alert("You chose Scissors");
            console.log("hc: scissors");
            return "scissors";
        default:
            alert("Your response was not an option or formatted incorrectly. Please try again.");
            return getHumanChoice();
    }
}

function playRound() {
    let computer = getComputerChoice();
    let human = getHumanChoice();

    switch (computer) {
        case "rock":
            if (human == "rock") {
                alert("Tie");
            }
            else if (human == "paper") {
                alert("Paper covers Rock. You win!");
            }
            else if (human == "scissors") {
                alert("Rock crushes Scissors. You lose.");
            }
        case "paper":
            if (human == "rock") {
                alert("Paper covers Rock. You lose.");
            }
            else if (human == "paper") {
                alert("Tie");
            }
            else if (human == "scissors") {
                alert("Scissors cut Paper. You win!");
            }
        case "scissors":
            if (human == "rock") {
                alert("Rock crushes Scissors. You win!");
            }
            else if (human == "paper") {
                alert("Scissors cut Paper. You lose.");
            }
            else if (human == "scissors") {
                alert("Tie");
            }
        default:
            alert("Other");
    }
}

let humanScore = 0;
let computerScore = 0;
playRound();


