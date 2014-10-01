//1

//2
function countdown (seconds) {
  var timer = setInterval(function() {
    console.log(seconds);
    if (seconds) {
      seconds--;
    } else {
      clearInterval(timer);
      }
    },1000);
  }
countdown(5);

//3
function countdown(seconds){
  if (seconds>=0){
    console.log(seconds);
    seconds--;
    setTimeout(function(){
      countdown(seconds)
    }, 1000);
  };
};
countdown(5);


