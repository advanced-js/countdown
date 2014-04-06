function countdown(seconds){
  var i=seconds+1;
  setInterval(function() { i--; if (i >= 0) console.log(i) },1000);
}

countdown(10);
