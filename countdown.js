function countdown(seconds) {
	for(var delay = 1000; seconds>=0; seconds--, delay+=1000){
		var count = function(seconds) {
			setTimeout(function() {
				console.log(seconds);
			}, delay);
		}
		count(seconds);
	}
}

countdown(5);



function countdownRecursive(seconds) {
	var count = function(seconds) {
		setTimeout(function() {
			console.log(seconds);
			seconds--;
			if(seconds >= 0) {
				count(seconds);
			}
		}, 1000);
	}

	count(seconds);
}

//countdownRecursive(5);