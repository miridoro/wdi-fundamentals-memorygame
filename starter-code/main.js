// setting up variables
var one = "queen";
var two = "queen";
var three = "king";
var four = "king";

var createBoard = function () {
	var oldDiv = document.getElementById('gameboard');

for(var i = 0; i < 4; i++) {
	var newDiv = document.createElement('div');
	newDiv.className='card';
	oldDiv.appendChild(newDiv);

	}
};

createBoard();







// if (two !== four || two !== three){
// 	alert ("Sorry, try again.");}
// else if (one !== four || one !== three){
// 	alert("Sorry, try again.");
// }
// else {
// 	alert ("You have a match.");
// }


// console.log(cardOne == cardTwo || cardThree == cardFour);
// console.log(cardOne == cardThree || cardOne == cardFour);
// console.log(cardTwo == cardThree || cardTwo == cardFour);