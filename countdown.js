function countdown(seconds){
	console.log(seconds);
	if(seconds > 0) {
		setTimeout(function() { 
			countdown(seconds - 1); 
		}, 1000);
	}
}

countdown(5);
