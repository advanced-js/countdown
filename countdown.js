function countdown(seconds) {
    // Don't define any new variables
    if (seconds > 0) {
        console.log(seconds);
        setTimeout(function() {
            countdown(seconds -1);
        }, 1000);
    }
}

countdown(10);
