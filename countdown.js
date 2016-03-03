
function countdown(seconds) {
	
	console.log(seconds)

	seconds-- 

	if (seconds == 0) {
		console.log ("Done");
		return
	} else {
		setTimeout(function(){
			countdown(seconds)
		}, 1000);
	}		
}

countdown(5);



	
	
