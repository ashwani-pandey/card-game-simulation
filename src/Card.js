
export default class Card {
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }

    getCardRank() {
        return this.rank;
    }

    getCardValue(){
        return this.value;
    }
}