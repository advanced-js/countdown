/**
 * countdown: Increments input parameter to zero and prints it to the console.
 * @param  {Number} seconds The number to start your countdown at.
 */
function countdown(seconds){	
	if(seconds >= 0){
		//if seconds has not ended print and call itself recursively
		console.log(seconds);
		seconds--;
		//Execute countdown after 1 second
		setTimeout(function(){ countdown(seconds) }, 1000);
	};
};

countdown(5);
