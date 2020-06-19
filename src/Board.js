
import Player from "./Player";
import Deck from "./Deck";
import victoryRules from "./rules";
import {faceOff} from "./rules";

export default class Board {
    constructor(){
        this.cardsInMiddle = [];
        this.players = [];
        this.cardsPerPlayer = 3;
    }

    start(playerNames){
        playerNames.forEach((name) => {
            this.players.push(new Player(name));
        });

        let deck = new Deck();
        deck.initialise();
        deck.shuffle();
        this.cardsInMiddle = deck.getCards();

        // Give three cards to each player
        this.players.forEach((player) => {

            player.setCards(this.cardsInMiddle.slice(0, this.cardsPerPlayer));
            player.setTopCard();
            this.cardsInMiddle.splice(0, this.cardsPerPlayer);
        })
    }

    winner(){
        
        // recurse through all the 3 victory related rules
        let result = this.narrowDownWinner(victoryRules, this.players);
        if(result.length === 1)
            return result[0];

        // FINAL FACEOFF IF THERE IS STILL A TIE
        result = faceOff(result);
        if(result.length === 1)
            return result[0];

        // IF THERE IS STILL A TIE, RESOLVE IT BY MAKING ALL OF THEM DRA ONE CARD EACH!
        result = resolveTie(result);
        return result[0];
    }

    narrowDownWinner(victoryRules, players){
        if(victoryRules.length === 0)
            return players;

        let result = players.filter(victoryRules[0]);
        if(result.length === 1)
            return result;
        else if(result.length === 0)
            return this.narrowDownWinner(victoryRules.slice(1), players);
        else
            return this.narrowDownWinner(victoryRules.slice(1), result);
    }
}