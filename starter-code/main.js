

var cards = ["queen", "queen", "queen", "king", "king", "king", "jack", "jack", "jack"];
var cardsInPlay = [];
var count = 0;
var match = 0;


var createBoard = function () {

	var oldDiv = document.getElementById('gameboard');

for(var i = 0; i < 9; i++) {
	var newDiv = document.createElement('div');
	newDiv.className='card';
	oldDiv.appendChild(newDiv);

	}



for(var i = 0; i < cards.length; i++){
	var cardElement = document.getElementsByClassName('card')[i];
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', setImage);
	// cardElement.addEventListener('click', isTwoCards);
	cardElement.addEventListener('click', isThreeCards);
	
	}


};



var isMatch = function(cardsInPlay) {
	console.log("isMatch");
	match = 0;

	var len = cardsInPlay.length -1
	console.log(len)

	for(var i = 0; i <= len; i++){

		if(cardsInPlay[len].getAttribute('data-card') === cardsInPlay[i].getAttribute('data-card')){
		match= match + 1;

		}
		
	}
	console.log(match)

	if(match === cardsInPlay.length){
		alert("It's a match")
		count = count + 1;
	}
	else{
		alert("Sorry, not a match")
	}


	console.log("Score= " + count);

};

// var isTwoCards = function() {
// 	console.log("is2cards");
// 	cardsInPlay.push(this);


// 	if(cardsInPlay.length === 2) {

// 		setTimeout(function() {
// 		isMatch(cardsInPlay);

	
// 		cardsInPlay[0].innerHTML='';
// 		cardsInPlay[1].innerHTML='';
// 		cardsInPlay = [];
// 	}, 50);

// 	}
// };

var isThreeCards = function() {
	console.log("isThreeCards");
	cardsInPlay.push(this);

	if(cardsInPlay.length === 3) {

		setTimeout(function() {
		isMatch(cardsInPlay);

	
		cardsInPlay[0].innerHTML='';
		cardsInPlay[1].innerHTML='';
		cardsInPlay[2].innerHTML='';
		cardsInPlay = [];
	}, 50);

	}
}


var setImage = function() {

console.log("setImage:"+this.getAttribute('data-card') );

if(this.getAttribute('data-card') === "queen"){
	this.innerHTML='<img src="queen.png" alt="Queen of Spades" />';
}
else if(this.getAttribute('data-card') === "king"){
	this.innerHTML='<img src="king.png" alt="King of Spades" />';
}
else {
	this.innerHTML='<img src="jack.png" alt="Jack of Spades" />';
}
};


//Durstenfeld Shuffle
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


var pressButton = document.getElementById('myButton');
pressButton.addEventListener('click', myButton);

function myButton() {
    alert("Your total score is: " + count);
    location.reload();
}


shuffleArray(cards);
console.log(cards);
createBoard();



