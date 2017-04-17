function countdown(seconds) {
    console.log(seconds);
    seconds--;
    if (seconds >= 0) {
        setTimeout(function () {
            countdown(seconds);
        }, 1000);
    }
}

countdown(5);
