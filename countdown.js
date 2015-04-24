function countdown(seconds) {

    setInterval(function() {
        if (seconds >= 0) {
            console.log(seconds);
            seconds--;
        } else {
            clearInterval();
        }
        // no love ternary
        // seconds >= 0 ? console.log(seconds--) : clearInterval();
    }, 1000);
}

countdown(10);
