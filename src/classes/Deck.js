
import Card from "./Card";

export default class Deck {
    constructor() {
        this.cards = [];
    }

    initialise() {
        const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        const ranksDict = {
            'A': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
        };

        const ranks = Object.keys(ranksDict);

        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                this.cards.push(new Card(suit, rank, ranksDict[rank]));
            })
        });
    }

    shuffle() {
        for(let i=this.cards.length-1; i>0; i--){
            let rand = Math.floor(Math.random()*(i+1));
            let temp = this.cards[i];
            this.cards[i] = this.cards[rand];
            this.cards[rand] = temp;
        }
    }

    getCards(){
        return this.cards;
    }
}