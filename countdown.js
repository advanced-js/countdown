// Levels
// 1. Use global variable to keep track of time

var counter;
var intervalID;

function countdown(seconds){
	counter = seconds;
	intervalID = setInterval(timer,1000);
}

function timer() {
	if ( counter === 0 ) {
		document.write("<br/>" + counter);
		clearInterval(intervalID);
	} else {
		document.write("<br/>" + counter + "...");
		counter--;
	}
}

countdown(5);
