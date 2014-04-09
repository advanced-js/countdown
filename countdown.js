function countdown(seconds){
	function timer(){
		if(seconds >= 0) {
			console.log(seconds);
			seconds -= 1;
		}
	}
	setInterval(function(){timer();},1000);
}
countdown(10);