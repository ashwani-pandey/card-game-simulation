
import Board from "./Board";

function startGame(players){

    let game = new Board();
    game.start(players);

    const winner = game.winner();
    console.log(`The winner of the game is ${winner.getPlayerName()}`);

    console.log("Listing down the cards that the players had!!!");
    game.players.forEach((player) => {
        console.log(`${player.getPlayerName()} had the following cards`);
        console.log(player.getCards());
        console.log();
    })
}



let play;
const players = startGame(["Ashwani", "Divay", "Pranav", "Ayush"]); 