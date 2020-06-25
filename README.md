
<h1 align="center">
<img src="https://user-images.githubusercontent.com/7101908/85181510-c0116400-b2a3-11ea-9529-54bfe5152bb5.png" alt="IPL-Dashboard" width="200"/></a><br/><br/>
Card Game Simulation
</h1>


> Card games are favourites of everyone! This project takes any given number of players, and performs a simulation of a luck based card game with them. Rules of the card game are mentioned below. They can be changed, or more rules can be added in /rules.js file

## Basic rules

* A standard deck of cards is used (No Joker).
* As of now, each player is dealt only three cards. This can be changed in index.js!
* Current simulation is working for four players. This can be increased or decreased in index.js too!
* 'A' is considered to have a number value of 1.
* 'A' is considered the top card in a face-off. So the order is A > K > Q > J > 10...2

## Rules for victory

* A trail (three cards of the same number) is the highest possible combination.
* The next highest is a sequence (numbers in order, e.g., 4,5,6. A is considered to have a value of 1).
* The next highest is a pair of cards (e.g.: two Kings or two 10s).
* If all else fails, the top card (by number value wins).
* If the top card has the same value, each of the tied players draws a single card from the deck until a winner is found.
* Only the newly drawn cards are compared to decide a tie. The top card wins a tie.

## Features

* Separation of concerns in the code for better understanding and code reusability
* Unit tests for easier modifications without breaking existing functionality

## Development, Testing and Playing

### Run app locally

1. Clone repo ```https://github.com/ashwani-pandey/card-game-simulation```
2. ```cd card-game-simulation```
3. ```yarn install && yarn start```
4. To run tests, ```yarn test```
5. To auto run tests while making changes, ```yarn watch``` 

## Credits
* [node.js](https://vuejs.org/), as runtime environment for JS code
* [nodemon](https://nodemon.io/), for automatic reloading post changes during development
