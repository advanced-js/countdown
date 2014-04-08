
function countdown(seconds){
	if(seconds > 0){
		document.write(seconds + '<br>');	
		seconds--;
		setTimeout(function(){
			countdown(seconds)
		}, 1000);
	}
}


countdown(60);
