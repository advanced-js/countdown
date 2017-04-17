function countdown(seconds){
  var sec = seconds;
  var counting = setInterval(function() {
    console.log(sec+"...");
    sec=sec-1;
    if(sec<0) {
      clearInterval(counting);
    };
  }, 1000);
};

countdown(10);