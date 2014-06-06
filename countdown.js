var timer;
function countdown(seconds){
  	timer = setInterval(function(){
		console.log(seconds + '...');
		seconds--;
		if (seconds == -1)
			clearInterval(timer);
	}, 1000);
}

countdown(5);