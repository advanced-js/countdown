
function countdown(seconds){
  document.write(seconds);
  setInterval(function(){
  		seconds = seconds-1;
  		document.write(seconds + '<br>');
	}, 1000);
  setTimeout(function(){
  	clearInteval()
  	document.write(done);
  }, seconds.getMilliseconds())
}

countdown(10);
