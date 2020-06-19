
import Board from "../classes/Board";

export function startGame(playerNames, cardsPerPlayer){

    let game = new Board(cardsPerPlayer);
    game.start(playerNames);

    console.log("\n### Listing down the cards that the players had!!! ###\n");
    game.players.forEach((player) => {
        console.log(`\n${player.getPlayerName()} had the following cards\n`);
        console.log(player.getCards());
        console.log();
    });

    const winner = game.winner();
    console.log(`\n*********  The winner of the game is ${winner.getPlayerName()}  *********\n`);

}