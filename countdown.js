function countdown(seconds){
  var id = setInterval(function() {
    console.log(seconds + "...");
    seconds--;
    if (seconds < 0) {
      clearInterval(id);
    }
  }, 1000);
}

countdown(5);