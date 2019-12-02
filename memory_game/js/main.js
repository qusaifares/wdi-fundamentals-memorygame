var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit)
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);
	}
};

createBoard();


//flipCard(0);
//flipCard(1);



/*
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[cardsInPlay.length - 1]);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[cardsInPlay.length - 1]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
*/

// if (cardsInPlay.length === 2)