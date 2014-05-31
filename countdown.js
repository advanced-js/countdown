function countdown (seconds) {
	var timer = setInterval(function() {
		console.log(seconds);
		if (seconds) {
			seconds--;
		} else {
			clearInterval(timer);
		}
	}, 1000);
}

countdown(5);