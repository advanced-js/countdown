function countdown(seconds){
  var i=seconds;
  console.log('wait 5 seconds');
  setTimeout(function() { setInterval(function() { if (i >= 0) console.log(i);i-- },1000);},5000);
}

countdown(10);
