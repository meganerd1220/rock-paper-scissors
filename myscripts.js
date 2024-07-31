console.log("Connected to HTML!");

function getComputerChoice() { // returns "rock", "paper", or "scissors"
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

function getHumanChoice() { // returns "rock", "paper", or "scissors"
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

function playRound() { // returns winner: "computer", "human", or "tie"
    let computer = getComputerChoice();
    console.log("playRound computer:", computer);
    let human = getHumanChoice();
    console.log("playRound human:", human);

    switch (computer) {
        case "rock":
            if (human == "paper") {
                alert("Paper covers Rock. You win!");
                console.log("cc: rock - hc: paper - human win");
                return "human";
            }
            else if (human == "scissors") {
                alert("Rock crushes Scissors. You lose.");
                console.log("cc: rock - hc: scissors - computer win");
                return "computer";
            }
            else { // human == "rock"
                alert("Tie");
                console.log("cc: rock - hc: rock - tie");
                return "tie";
            }
        case "paper":
            if (human == "rock") {
                alert("Paper covers Rock. You lose.");
                console.log("cc: paper - hc: rock - computer win");
                return "computer";
            }
            else if (human == "scissors") {
                alert("Scissors cut Paper. You win!");
                console.log("cc: paper - hc: scissors - human win");
                return "human";
            }
            else { // human == "paper"
                alert("Tie");
                console.log("cc: paper - hc: paper - tie");
                return "tie";
            }
        case "scissors":
            if (human == "rock") {
                alert("Rock crushes Scissors. You win!");
                console.log("cc: scissors - hc: rock - human win");
                return "human";
            }
            else if (human == "paper") {
                alert("Scissors cut Paper. You lose.");
                console.log("cc: scissors - hc: paper - computer win");
                return "computer";
            }
            else { // human == "scissors"
                alert("Tie");
                console.log("cc: scissors - hc: scissors - tie");
                return "tie";
            }
        default:
            alert("Missing case somewhere");
            console.log("Missing case somewhere");
    }
}

let humanScore = 0;
let computerScore = 0;
let winner = playRound();
console.log("winner: ", winner);


