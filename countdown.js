function countdown(seconds){
	var tick = 0;

	setInterval(function() {
        if (seconds > tick) {
        	seconds--;
        	console.log(seconds);
        }
    }, 1000);
}

console.log(countdown(5));