console.log("JS file is connected to HTML! Woo!")

var cardOne = "King";
var cardTwo = "King";
var cardThree = "Queen";
var cardFour = "Queen";

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