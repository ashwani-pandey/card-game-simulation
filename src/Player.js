
export default class Player {
    constructor(name){
        this.playerName = name;
        this.playerCards = [];
        this.topCard = null;
    }

    setTopCard(){
        this.playerCards.sort((card1, card2) => card1.value - card2.value);
        if(this.playerCards[0].value == 1)
            this.topCard = this.playerCards[0];
        else
            this.topCard = this.playerCards[this.playerCards.length-1];
    }

    setCards(cards){
        this.playerCards = cards;
    }

    getTopCard(){
        return this.topCard;
    }

    getCards(){
        return this.playerCards;
    }

    getPlayerName(){
        return this.playerName;
    }
}