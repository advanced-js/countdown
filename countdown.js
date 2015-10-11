function countdown(seconds){
  // ...
  if (seconds > 0) {
    var i = window.setInterval(
      function() { 
        document.write(seconds +'... <br>'); 
        countdown(seconds-1);
        window.clearInterval(i);
      }, 1000);
  }
}

countdown(5);
