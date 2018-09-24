//Blackjack 
//by Denise Erazmus


//card array

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight',
    'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'
];


//create deck
function createDeck() {
    //empties deck
    let deck = [];
    //loops to create deck of 52 cards
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {

        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        	let card = {
        		suit: suits[suitIdx],
        		value: values[valueIdx]
        	};
            deck.push( card );
        }
    }

    for (let i = 0; i < deck.length; i++) {
        console.log(deck[i]);
    }
    return deck;
}

function GetCardStr( card ) {
	return card.value + ' of ' + card.suit;
}

//get next card
function getNextCard() {
    //takes the first value off of deck array and shifts all the rest down
    return deck.shift();
}

let deck = createDeck();



//array that holds player cards

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack");

console.log("You are dealt: ");
console.log("  " + GetCardStr(playerCards[0]));
console.log("  " + GetCardStr(playerCards[1]));