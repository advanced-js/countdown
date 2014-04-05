/**
 * countdown: Increments input parameter to zero and prints it to the console.
 * @param  {Number} seconds The number to start your countdown at.
 */
function countdown(seconds){
	
	function printTime(){
		if(seconds >= 0){
			//if seconds has not ended print
			console.log(seconds);
			seconds--;
		} else{
			//otherwise clear interval
			clearInterval();
		}
	};

	//Execute printTime every second
	setInterval(printTime, 1000);
};

countdown(10);
