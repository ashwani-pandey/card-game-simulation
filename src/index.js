
import readline, { createInterface } from 'readline';
import {startGame} from "./services/game";

const read = createInterface({
    input: process.stdin,
    output: process.stdout
});


// Simulating a game of four players
const players = ["Ashwani", "Divay", "Pranav", "Ayush"];

function askForNewGame(){

    console.log();
    console.log("#################################");
    
    read.question('Do you want to play a game? (Y/N): ', (answer) => {
        if(answer === "Y" || answer === "y"){
            startGame(players);
            askForNewGame();
        } else if(answer === "N" || answer === "n"){
            read.close();
            process.exit(0);
        } else {
            console.log("Kindly give a proper response!");
            askForNewGame();
        }
    });
}

askForNewGame();


