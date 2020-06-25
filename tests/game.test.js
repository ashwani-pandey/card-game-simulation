
import {startGame} from "../src/services/game";
import Player from "../src/classes/Player";

it("GAME 1: A game of 4 players, 3 cards each", () => {

    const playerNames = ["TEST1", "TEST2", "TEST3", "TEST4"];
    const cardsPerPlayer = 3;
    expect(startGame(playerNames, cardsPerPlayer)).toBeInstanceOf(Player);
});

it("GAME 1: A game of 3 players, 4 cards each", () => {

    const playerNames = ["TEST1", "TEST2", "TEST3"];
    const cardsPerPlayer = 4;
    expect(startGame(playerNames, cardsPerPlayer)).toBeInstanceOf(Player);
});

it("GAME 1: A game of 5 players, 5 cards each", () => {

    const playerNames = ["TEST1", "TEST2", "TEST3", "TEST4", "TEST5"];
    const cardsPerPlayer = 5;
    expect(startGame(playerNames, cardsPerPlayer)).toBeInstanceOf(Player);
});