import Deck from "../src/classes/Deck";
import Player from "../src/classes/Player";
import {victoryRules} from "../src/services/rules";

it("VICTORY RULE 1: All cards have the same number", () => {

    const victoryRule1 = victoryRules[0]; 

    let deck = new Deck();
    deck.initialise();
    let cards = deck.getCards();

    let testPlayer = new Player("Test");
    testPlayer.setCards([cards[0], cards[13], cards[26]]); // all the cards with same number of 1
    testPlayer.setTopCard();

    expect(victoryRule1(testPlayer)).toBe(true);
});

it("VICTORY RULE 1: All cards don't have the same number", () => {

    const victoryRule1 = victoryRules[0]; 

    let deck = new Deck();
    deck.initialise();
    let cards = deck.getCards();

    let testPlayer = new Player("Test");
    testPlayer.setCards([cards[0], cards[1], cards[2]]); // all the cards have different number
    testPlayer.setTopCard();

    expect(victoryRule1(testPlayer)).toBe(false);
});

it("VICTORY RULE 2: All cards, in terms of numbers, are in sequence", () => {

    const victoryRule2 = victoryRules[1]; 

    let deck = new Deck();
    deck.initialise();
    let cards = deck.getCards();

    let testPlayer = new Player("Test");
    testPlayer.setCards([cards[0], cards[1], cards[2]]); // all the cards are in sequence
    testPlayer.setTopCard();

    expect(victoryRule2(testPlayer)).toBe(true);
});

it("VICTORY RULE 2: All cards, in terms of numbers, are not in sequence", () => {

    const victoryRule2 = victoryRules[1]; 

    let deck = new Deck();
    deck.initialise();
    let cards = deck.getCards();

    let testPlayer = new Player("Test");
    testPlayer.setCards([cards[0], cards[1], cards[3]]); // all the cards are not in sequence
    testPlayer.setTopCard();

    expect(victoryRule2(testPlayer)).toBe(false);
});

it("VICTORY RULE 3: A pair of two cards (two kings)", () => {

    const victoryRule3 = victoryRules[2]; 

    let deck = new Deck();
    deck.initialise();
    let cards = deck.getCards();

    let testPlayer = new Player("Test");
    testPlayer.setCards([cards[0], cards[12], cards[25]]); // a pair of kings and an ace
    testPlayer.setTopCard();

    expect(victoryRule3(testPlayer)).toBe(true);
});

it("VICTORY RULE 3: No pair of cards", () => {

    const victoryRule3 = victoryRules[2]; 

    let deck = new Deck();
    deck.initialise();
    let cards = deck.getCards();

    let testPlayer = new Player("Test");
    testPlayer.setCards([cards[0], cards[1], cards[3]]); // ace, one and two
    testPlayer.setTopCard();

    expect(victoryRule3(testPlayer)).toBe(false);
});

