//Exercise 2 - Countdown 
function countdown(seconds) {
  var timer = parseInt(seconds);
  var delay = 1000;
  try {
    var startTimer = setInterval(function() {
      console.log(timer);
      timer--;
      if (timer == 0) {
        clearInterval(startTimer);
      }
    }, delay);

  } catch (e) {}
}
countdown(5);

function cancelSetInerval() {
  clearInterval();
}