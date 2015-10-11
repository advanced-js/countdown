function countdown(seconds){

	var timer = 
	setInterval(function(){
		console.log(seconds);
		seconds--
		if (seconds === -1) {
			console.log("Countdown exercise complete!!");
			clearInterval(timer);
		}
	},1000)
	//end var timer

} //end function countdown(seconds)


countdown(10);

//NOTES (from Professor Sultan)

// setTimeout( ) – the setTimeout( ) method takes 2 parameters. A name of a function,
// and the number of milliseconds as an interval to wait prior to executing that function.
// setTimeout( ) is only executed once, unless you re-execute it again.
// The syntax is: setTimeout("function( )", milliseconds);

// setInterval( ) – the setInterval( ) method also takes 2 parameters. A name of a function,
// and the number of milliseconds as an interval to execute and re-execute the function.
// setInterval( ) is executed repeatedly after each interval.
// The syntax is: setInterval("function( )", milliseconds);

// clearInterval( ) - You can assign the result of this setInterval call to a variable reference. This variable can be used
// whenever you want to terminate or cancel the execution.
// The syntax is: clearInterval(name_of_timer)