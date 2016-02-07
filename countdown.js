// Levels
// Note: All levels wait a second before starting the countdown

// 3. BONUS: don't define any new variables

function countdown(seconds) {
	setTimeout(timer,1000,seconds);
}

function timer(seconds) {
	if ( seconds > 0 ) {
		document.write("<br/>" + seconds +  "...");
	} else {
		document.write("<br/>" + seconds);
	}
	seconds--;
	if ( seconds >= 0 ) {
		setTimeout(timer,1000,seconds);
	}
}

// 2. Keep track of time without defining any global variables

// 1. Use global variable to keep track of time

// var counter;
// var intervalID;

// function countdown(seconds) {
// 	counter = seconds;
// 	intervalID = setInterval(timer,1000);
// }

// function timer() {
// 	if ( counter === 0 ) {
// 		document.write("<br/>" + counter);
// 		clearInterval(intervalID);
// 	} else {
// 		document.write("<br/>" + counter + "...");
// 		counter--;
// 	}
// }

countdown(5);
