// JavaScript Document


/*2 forms of the original which do not countdown per second 

function countdown(seconds){
	for (i=seconds; i>=0; i--){
		 (function (i) {
            setTimeout(function () {
              console.log(i);
               }, 1000);
         })(i);
			
	}
}


function countdown(seconds){
	if(seconds>=0){
		
		console.log(seconds);
		seconds--;
		 setTimeout(countdown(seconds), 1000);
		
			
	}
}

*/

/*V2, added a function around countdown seconds, returning 1 undefined?*/


function countdown(seconds){
	if(seconds>=0){
		console.log(seconds);
		seconds--;
		 setTimeout(function () {countdown(seconds);}, 1000);
			
	}
}



countdown(5);
