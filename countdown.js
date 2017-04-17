function countdown(seconds){
	if (seconds > -1) {
		console.log(seconds);
		setTimeout(function(){
			countdown(seconds - 1);
		},1000);
	}
}

countdown(5);
