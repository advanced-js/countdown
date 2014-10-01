function countdown(seconds){
  setTimeout(function() {
    console.log(seconds);
    if (seconds >= 1) {
      countdown(seconds - 1);
    };
  }, 1000);
}

countdown(5);
