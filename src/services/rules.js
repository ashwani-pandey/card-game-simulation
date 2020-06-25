
export const victoryRules = [victoryRule1, victoryRule2, victoryRule3];

function victoryRule1(player){
    // RULE 1 - Do all the cards have same number?
    const cards = player.getCards();
    let victory = false;

    let valueMap = new Map();
    cards.forEach((card) => {
        let cardValue = card.getCardValue();
        if(valueMap.has(cardValue)){
            valueMap.set(cardValue, valueMap.get(cardValue)+1);
        } else {
            valueMap.set(cardValue, 1);
        }

        if(valueMap.get(cardValue) >= 3){
            victory = true;
        }
    });

    return victory;
}

function victoryRule2(player) {
    // RULE 2 - All the numbers are in sequence?
    const cards = player.getCards();
    let victory = true;
    let cardValues = cards.map((card) => card.getCardValue());
    cardValues.sort((a,b)=> a-b);
    for(let i=1; i<cardValues.length; i++){
        if(cardValues[i] !== cardValues[i-1]+1){
            victory = false;
            break;
        }
    }
    return victory;
}

function victoryRule3(player){
    // RULE 3 - A pair of cards ( two kings or two 10s )
    const cards = player.getCards();
    let victory = false;

    let valueMap = new Map();
    cards.forEach((card) => {
        let cardValue = card.getCardValue();
        if(valueMap.has(cardValue)){
            valueMap.set(cardValue, valueMap.get(cardValue)+1);
        } else {
            valueMap.set(cardValue, 1);
        }

        if(valueMap.get(cardValue) >= 2){
            victory = true;
        }
    });

    return victory;
}

export function faceOff(players){
    // Compare the top card of all the players!
    let result;

    /* IF SOMEONE HAS ACE */
    result = players.filter((player) => {
        return player.getTopCard().getCardValue() === 1;
    });

    if(result.length > 0)
        return result;

    /* IF NO ONE HAS ACE */
    players.sort((player1, player2) => {

        let cardValue1 = player1.getTopCard().getCardValue();
        let cardValue2 = player2.getTopCard().getCardValue();

        if(cardValue1 === cardValue2)
            return 0;
        else if(cardValue1 > cardValue2)
            return 1
        else
            return -1;
    });
    
    let topCardYet = players[0].getTopCard();
    result = players.filter((player) => {
        return player.getTopCard().getCardValue() === topCardYet.getCardValue();
    });
    return result;
}



