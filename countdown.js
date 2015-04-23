function countdown(seconds) {

    setInterval(function() {
        seconds >= 0 ? console.log(seconds--) : clearInterval();
    }, 1000);
}

countdown(10);
