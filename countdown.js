function countdown(seconds){
	var tick = 0;

	setInterval(function() {
        if (seconds > tick) {
        	seconds--;
        	console.log(seconds);
        }
    }, 1000);

    return seconds;
}

console.log(countdown(5));