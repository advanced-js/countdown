function countdown(seconds){
	setTimeout(function() {
		console.log(seconds);
		if (seconds) countdown(seconds-1);
	}, 1000);
}

countdown(5);
