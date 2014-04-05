function countdown(seconds) {
    // 1. Use global variable to keep track of time
    time = seconds;
    function decrementTime() {
        time -= 1;
        if (time > 0) {
            console.log(time);
        } else {
            clearInterval(timer);
        }
    }
    if (time > 0) {
        console.log(time);
        timer = window.setInterval(decrementTime, 1000);
    }
}

countdown(10);
