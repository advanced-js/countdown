function countdown(seconds){
	
	for(seconds; seconds >= 0; seconds--){
		var printTime = function(time){
			console.log(time);
		};
		setTimeout(printTime(seconds), 1000);
	}
};

countdown(10);
