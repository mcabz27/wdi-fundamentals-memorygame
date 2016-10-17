console.log("JS file is connected to HTML! Woo!")

var cardOne = "King";
var cardTwo = "King";
var cardThree = "Queen";
var cardFour = "Queen";
var gameBoard = document.getElementById("game-board");
console.log(gameBoard);

 if (cardTwo === cardFour){
	alert("Sorry, try again.");
}	else if (cardTwo === cardThree){
	alert("sorry, try again");
}	else if (cardOne === cardTwo){
	alert("You found a match!");
}	else if (cardOne === cardThree){
	alert("Sorry, try again");
}	else if (cardThree === cardFour){
	alert("You found a match!");
}	


var createCards = function()	{
	for (var i = 1; i <= 4; i++){
		var newCard = document.createElement('div');
		newCard.className = "card"
		console.log(newCard);
		gameBoard.appendChild(newCard);
	}
}
createCards();
