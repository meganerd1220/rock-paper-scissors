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

getComputerChoice();
