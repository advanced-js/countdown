function countdown(seconds){
    setTimeout(function() { 
        if(seconds >= 0) { 
            console.log(seconds); 
            countdown(--seconds); 
        }

    }, 1000);
}

countdown(5);
