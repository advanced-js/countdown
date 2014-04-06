function countdown(seconds){
  var i=0;
  setInterval(function() { i++; if (i <= seconds) console.log(i) },1000);
}

countdown(10);
