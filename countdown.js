// Countdown level 1.  Alejandro Oviedo

function countdown(seconds){
		
	var myInterval = setInterval(function(){

			seconds = seconds - 1;

			if (seconds >= 0){
				console.log(seconds);
			}
			else {
				clearInterval(myInterval);
			} 

	}, 1000);
}

countdown(5);
