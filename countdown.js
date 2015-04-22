function countdown(seconds){
	if (seconds === 0) {
		return;
	}

	console.log(seconds);

	setTimeout (function() {
		countdown(seconds - 1);
	}, 1000);
}

countdown(5);
