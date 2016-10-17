console.log("JS file is connected to HTML! Woo!")

var gameBoard = document.getElementById("game-board");
console.log(gameBoard);
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

 var isMatch = function(cardsInPlay){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You got a match!");
	}	else{
		alert("Sorry, try again");
	}
	var resetCards = document.getElementsByClassName("card");
	console.log(resetCards);
	for(var i = 0; i < resetCards.length; i++){
		resetCards[i].innerHTML = '';
	}
};


var createCards = function()	{
	for (var i = 0; i < cards.length; i++){
		var newCard = document.createElement('div');
		newCard.className = "card"
		gameBoard.appendChild(newCard);
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
	}
};
createCards();

function isTwoCards() {
	console.log(this);
  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king'){
  	this.innerHTML = "<img src='./spades-884197_960_720.png'>"
  }
  if (this.getAttribute('data-card') === 'queen'){
  	this.innerHTML = "<img src='./hearts-884201_960_720.png'>"
  }
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
console.log(cardsInPlay);
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}
