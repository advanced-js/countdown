// by mroyt
countdown(5);

//LEVEL 3: no variables
function countdown(seconds){
	//The base case
	if (seconds===0){
			console.log(seconds);
			console.log("DING!");
	}
	//The recusive case
	else{
		console.log(seconds);
		setTimeout(function(){
			return countdown(seconds-1);
		},1000);
	}
}


//LEVEL 2: no global variables
function countdown1(seconds){
	//times when to kill the countdown
	setTimeout(function(){
		clearInterval(interval);
		console.log(seconds);
		console.log("DING!");
	},1000*(seconds));
	
	//Starts the top of the count immediately without waiting 1 second
	setTimeout(
		function(){
			console.log(seconds);
			seconds--;	
		},0);
	//continues the count every second
	var interval = setInterval(
		function(){
			console.log(seconds);
			seconds--;
		},1000);
}


//LEVEL 1... not sure how to do this using global variable to track time?
function countdown2(seconds){

}