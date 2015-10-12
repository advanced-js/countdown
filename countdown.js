function countdown(seconds){
    var countdownBySeconds = setInterval(function() { 
        if(seconds >= 0) { 
            console.log(seconds); 
            seconds--; 

        } else { 
            clearInterval(countdownBySeconds); 
        }

    }, 1000);
}

countdown(5);
