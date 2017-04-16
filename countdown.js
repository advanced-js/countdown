// This seemed like the simplest way to do this without combining a loop with a timer or getting into recursion. 
//Since Javascript Garden suggests that setTimeout is used over setInterval, I'm curios about outher implementations.

function countdown(seconds) {
  var countInterval = setInterval(function(){
    console.log(seconds);
    if (seconds <= 0) {
      window.clearInterval(countInterval)
    } else {
      seconds -= 1
    }
  }, 1000)
}

countdown(5);
