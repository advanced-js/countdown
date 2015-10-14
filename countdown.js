function countdown(seconds){
	var total = [];
	if (seconds >= total) {
		for(var i = seconds; i > 0; i--) {
			total.push(i);
		}
	}
	return total;
}

console.log(countdown(5));