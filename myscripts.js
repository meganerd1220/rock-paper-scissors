console.log("Connected to HTML!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 300);
    console.log(choice);
    
    if (choice < 100) {// 0-99
        console.log("rock");
        return "rock";
    } else if (choice <= 200 && choice >= 100) { // 100-200
            console.log("paper");
            return "paper";
    } else if (choice >= 201) { // 201-300
            console.log("scissors");
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

    console.log(userInput);

    switch (userInput) {
        case "1":
            alert("You chose Rock");
            return "rock";
        case "2":
            alert("You chose Paper");
            return "paper";
        case "3":
            alert("You chose Scissors");
            return "scissors";
        default:
            alert("Your response was not an option or formatted incorrectly. Please try again.");
            return getHumanChoice();
    }

}

let computer = getComputerChoice();
let human = getHumanChoice();


