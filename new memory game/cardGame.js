

var cardClick = 0;
var first;
var second;
var cardMatch = 0;

var cards = [];
cards[0]="1200px-Playing_card_heart_A.svg.png";
cards[1]="32651170-king-of-hearts-playing-card.jpg";
cards[2]="jack.png";
cards[3]="1200px-Playing_card_heart_A.svg.png";
cards[4]="32651170-king-of-hearts-playing-card.jpg";
cards[5]="jack.png";
cards[6]="1200px-Playing_card_heart_A.svg.png";
cards[7]="jack.png";
cards[8]="32651170-king-of-hearts-playing-card.jpg";
cards[9]="jack.png";
cards[10]="1200px-Playing_card_heart_A.svg.png";
cards[11]="32651170-king-of-hearts-playing-card.jpg";


//shuffles through array
function cardGame(array){

var currentCard = array.length, temporaryCard, randomCard;

while(0 !== currentCard)
{
	randomCard = Math.floor(Math.random() * currentCard);
	currentCard -=1;

	temporaryCard = array[currentCard];
	array[currentCard] = array[randomCard];
	array[randomCard] = temporaryCard;


}
	return array;
  
    
  }
//shuffle
  var mix = cardGame(cards);
//function that is applied when card is clicked
  function pick(card){

  if (cardClick==0) {
//setup for image that will be clicked
  	first = card;
  	document.images[card].src = cards[card];
  	cardClick = 1;
  }else if (cardClick == 1) {

  	cardClick = 2;
  	second = card;
  	document.images[card].src = cards[card];
  	//set to half a second before flip
    timer = setInterval(control,500);
  }
  else{
  	//only 2 images will be displayed until flipped
  	alert("click image once");

  }
}
//function that checks if the cards match
  function control(){
  	clearInterval(timer);
  	
  	cardClick = 0;
  	if (cards[second]==cards[first]) {
//if first card is equal to second match them
  		cardMatch++;
  		if (cardMatch==6) {

  			alert("WELL DONE!!!! you have matched all the cards!");
  			location.reload();
//reset
  		}
  	}
  	else{
  		document.images[first].src = "DSC100497013.jpg";
  		document.images[second].src = "DSC100497013.jpg";
  		return;
  	}
  }
