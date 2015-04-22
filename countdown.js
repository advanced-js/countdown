function countdown(seconds){
  // ...
  var intervalID;
  function count() {
  	console.log(seconds--);
  	if(seconds<0)
  		clearInterval(intervalID);
  }
  intervalID = setInterval(count, 1000);
}

//without creating new variables
function countdown2(seconds) {
		setTimeout(function(){
			console.log(seconds--);
			if(seconds>=0)
				countdown2(seconds);
		},1000);
}

countdown(5);
countdown2(4);